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

app = Flask(__name__)
model = torchvision.models.resnet50(pretrained=True) # load ResNet50
database_path = "/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/database/*.jpeg"

def preproc(d: DocumentArray):
        return (d.load_uri_to_image_tensor()  # load
                .set_image_tensor_shape(shape=(128, 128))
                .set_image_tensor_normalization()  # normalize color 
                .set_image_tensor_channel_axis(-1, 0))

#connection to FE
@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')

#ML Pipeline:
@app.route('/about')
def about():
   pass

@app.route('/', methods=['POST'])
def predict():
    imagefile = request.files['imagefile']
    image_path = "/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/static/images/" + imagefile.filename
    imagefile.save(image_path)
    left_da = DocumentArray.from_files(image_path)
    left_da.apply(preproc)
    left_da.embed(model)

    right_da = DocumentArray.from_files(database_path)
    right_da.apply(preproc)
    right_da.embed(model)

    left_da.match(right_da, limit=4)

    for d in left_da:
        for m in d.matches:
            print(d.uri, m.uri, m.scores['cosine'].value)

    classification = (DocumentArray(left_da[0].matches, copy=True).apply(lambda d: d.set_image_tensor_channel_axis(0, -1).set_image_tensor_inv_normalization()).plot_image_sprites(output='/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/static/images/result.jpeg'))

    return render_template('index.html', prediction = 1)
    

    
if __name__ == "__main__":
    app.run(port=5000, debug=True) 
    
    
    
    
    
    
    
    
    
    
    '''
    #left_da = DocumentArray.from_files(image_path)
    #left_da.plot_image_sprites()
    left_da = (Document(uri=image_path)
                .load_uri_to_image_blob()  # load
                .set_image_blob_shape(shape=(128, 128))
                .set_image_blob_normalization()  # normalize color 
                .set_image_blob_channel_axis(-1, 0))  # switch color axis for the pytorch model later
    left_da.embed(model)
    #right_da = DocumentArray.from_files(database_path)
    right_da = (DocumentArray(uri='database_path')
                .load_uri_to_image_blob()  # load
                .set_image_blob_shape(shape=(128, 128))
                .set_image_blob_normalization()  # normalize color 
                .set_image_blob_channel_axis(-1, 0))  # switch color axis for the pytorch model later                        .apply(preproc)
    right_da.embed(model)

    left_da.match(right_da, limit=3)
    for d in left_da:
        for m in d.matches:
            print(d.uri, m.uri, m.scores['cosine'].value)

    return render_template('index.html', (DocumentArray(left_da[0].matches, copy=True).apply(lambda d: d.set_image_blob_channel_axis(0, -1).set_image_blob_inv_normalization()).plot_image_sprites()))
'''

