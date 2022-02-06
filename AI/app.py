#pip install flask
#pip install "docarray[pip3full]"
#pip install matplotlib pillow
#pip install uvicorn
#pip install fastapi
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot
import torchvision
from docarray import DocumentArray, Document
from flask import Flask, request
from matplotlib.figure import Figure
import os
import glob, os, json
from flask import jsonify

#variables declaration:
#app: Flask-backend-server
#model: AI-model, based on which the similar items are detected
#database_path: database of 3000 vinted pictures, against which the user picture is benchmarked
#dictio: additional information about the 3000 vinted pictures (price, url, user, publishing date etc.)
app = Flask(__name__)
model = torchvision.models.resnet50(pretrained=True) # load ResNet50
database_path = "/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/databaseNew/*.jpeg"
dictio = json.load(open("/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI/databaseNew/dictio.json"))

#function that transforms picture into format, that AI model can read
def preproc(d: DocumentArray):
        return (d.load_uri_to_image_tensor()  # load
                .set_image_tensor_shape(shape=(128, 128))
                .set_image_tensor_normalization()  # normalize color 
                .set_image_tensor_channel_axis(-1, 0))

#readin of the 3000 database pictures. Readin is pretty time consuming, wherefore the readin should be only conducted during the first iteration
iteration = 0
if iteration == 0:
    right_da = DocumentArray.from_files(database_path)
    right_da.apply(preproc)
    right_da.embed(model)
    iteration+=1

#setup of the backend-server/API
@app.route('/api/process-image', methods=['POST'])
def predict():

    #environment variables (optional)
    host = request.remote_addr
    port = request.environ.get('SERVER_PORT', '5000')

    #reading and saving the picture, that has been passed to front end
    target = os.path.join("/Users/lukasbauerschmidt/Desktop/TechLab/3. Project/3. Code/wt21-fash-un-capsule-wardrobe/AI", 'static/')
    file = request.files['imagefile']
    file_name = file.filename
    destination = "/".join([target, file_name])
    file.save(destination)
    
    #find similar item"-part
    #reading the picture as array and transforming it to right format
    left_da = DocumentArray.from_files(destination)
    left_da.apply(preproc)
    left_da.embed(model)

    #compare the user picture with the vinted database
    left_da.match(right_da, limit=4)

    #find the items in the vinted database with the lowest "cosine" distance and hence show highest similarity
    matches = []
    for d in left_da:
        for m in d.matches:
            print(d.uri, m.uri, m.scores['cosine'].value)
            matches.append(os.path.basename(m.uri))
    
    #create new dictionary with data of most similar pictures
    dictio_matches={}
    for k in dictio.keys():
        for entry in matches:
            if k == entry:
                dictio_matches[k]=[dictio[k][0]]
    
    #transform the previously built dictionary in a format, that front-end can read (array & JSON-format)
    new_dictio = []
    for i, entry in enumerate(dictio_matches.values()):
        new_dictio.append(entry[0])
    response = jsonify(new_dictio)

    #add header to response, so that front end server accepts response
    response.headers.add('Access-Control-Allow-Origin', '*')

    #return response and success code
    return response, 200
    
#run application
if __name__ == "__main__":
    app.run(port=5000, debug=True) 