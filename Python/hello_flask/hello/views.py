from hello import app
from flask import jsonify, request

@app.route('/', methods=['GET'])
def index():
    if(request.method == 'GET'):
        data = {"status": "up"}
        return jsonify(data)
