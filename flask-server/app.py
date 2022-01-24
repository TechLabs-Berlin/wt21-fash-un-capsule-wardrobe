# from flask import Flask, request, render_template
# from flask_cors import CORS

# app = Flask(__name__)
# cors = CORS(app)

# @app.route('/image', methods=['GET'])
# def hello_world():
#      print('Hello World')
#      return "Hello World"

# @app.route("/api/process-image", methods = ["POST"])
# def upload_file():
#      image = request.files["image"]
#      print(image)

#      return image



# if __name__ == "__main__":
#     app.run(debug=True)

from locale import currency
from flask import Flask, jsonify, request, send_from_directory
import uuid 
import os

app = Flask(__name__ )

#TODO @Lukas: Bildpfad muss geändert werden von static/images auf nur static

@app.route("/static/<path:path>")
def static_dir(path):
    return send_from_directory("static", path)


@app.route("/api/process-image", methods=["POST"])
def index():

    #variables
    host = request.remote_addr
    port = request.environ.get('SERVER_PORT', '5000')

    #throw error if no image is sent
    if 'imagefile' not in request.files:
        return jsonify({"error": "No image was provided"}), 400


    #clean up old uploads / can be removed if not needed ;)
    for filename in os.listdir('static/'):
        os.remove('static/'+filename)


    # Get the image from the request
    imagefile = request.files['imagefile']

    #genearate 5 uuids 
    uuids = []
    for i in range(5):
        uuids.append(str(uuid.uuid4()))

    #save image to static/images
    imagefile.save('static/'+uuids[0]+'.jpg')

    #copy image 4 times to static/images
    for i in range(4):
        os.system('cp static/'+uuids[0]+'.jpg static/'+uuids[i+1]+'.jpg')

    #create urls from uuids
    urls = []
    for i in range(5):
        urls.append('http://'+host+":"+port+"/static/"+uuids[i]+'.jpg')

    #build response #TODO Replace with real data
    response = jsonify({ "imagePaths": urls, "price": "100 €",  "vintedURL": "https://www.vinted.com/test/bla", "vintedUsername" : "mmustermann" })

    #disable cors
    response.headers.add('Access-Control-Allow-Origin', '*')

    #send response
    return response, 200