#pip install flask
#pip install "docarray[pip3full]"
#pip install matplotlib pillow
#pip install uvicorn
#pip install fastapi
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from PIL import Image
import numpy as np
import io
import torchvision
from docarray import DocumentArray
from flask import Flask, render_template, request
from flask import send_file
from docarray import Document
import numpy as np
from matplotlib.figure import Figure
import base64
import os
import pandas as pd
import glob, os, json
import wget
from flask import jsonify
from PIL import Image

app = Flask(__name__)
model = torchvision.models.resnet50(pretrained=True) # load ResNet50
database_path = "/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/database/*.jpeg"
dictio = json.load(open("/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/out/dictio.json"))

def preproc(d: DocumentArray):
        return (d.load_uri_to_image_tensor()  # load
                .set_image_tensor_shape(shape=(128, 128))
                .set_image_tensor_normalization()  # normalize color 
                .set_image_tensor_channel_axis(-1, 0))

##Backend:
#@app.route('/about')
#def about():
#   pass

@app.route('/api/process-image', methods=['POST'])
def predict():
    #variables
    #host = request.remote_addr
    #port = request.environ.get('SERVER_PORT', '5000')

    #imagefile = request.files['imagefile']
    imagefile = Image.open("./benchmark.jpg")
    image_path = "static/images/" + imagefile.filename
    imagefile.save(image_path)
    left_da = DocumentArray.from_files(image_path)
    left_da.apply(preproc)
    left_da.embed(model)

    right_da = DocumentArray.from_files(database_path)
    right_da.apply(preproc)
    right_da.embed(model)

    left_da.match(right_da, limit=4)

    #throw error if no image is sent
    #if 'imagefile' not in request.files:
    #        return jsonify({"error": "No image was provided"}), 400
    
    #clean up old uploads / can be removed if not needed ;)
    #for filename in os.listdir('static/'):
    #    os.remove('static/'+filename)


    matches = []
    for d in left_da:
        for m in d.matches:
            print(d.uri, m.uri, m.scores['cosine'].value)
            matches.append(m.uri)
    
    #extracts the 2x2 result matrix into one picture. Discussed with front end, that we do not display this 2x2 matrix but rather each picture individually (this is why this line is outcommented)
    #(DocumentArray(left_da[0].matches, copy=True).apply(lambda d: d.set_image_tensor_channel_axis(0, -1).set_image_tensor_inv_normalization()).plot_image_sprites(output='/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/static/images/result.jpeg'))
    
    matches_probe = ["1.jpeg","5.jpeg","63.jpeg","523.jpeg"]

    dictio_matches={}

    for k in dictio.keys():
        for entry in matches_probe:
            if k == entry:
                dictio_matches[k]=[dictio[k][0]]
    
    #two options:
    #first: dump json file in directory and FE accesses it via directory
    #json.dump(dictio_matches, open("/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/dictio_matches.json", "w"))
    #second: directly pass the file to FE without dropping it in directory
    #choose option that FE prefers
    response = json.dumps(dictio_matches)

    #disable cors
    #response.headers.add('Access-Control-Allow-Origin', '*')
    
    return response, 200
    
if __name__ == "__main__":
    app.run(port=5000, debug=True) 