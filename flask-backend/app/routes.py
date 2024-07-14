from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return 'Hello, World!'

@main.route('/google-api', methods=['GET'])
def google_api():
    response = {
        'message': 'Google API response'
    }
    return jsonify(response)

@main.route('/llama-api', methods=['POST'])
def llama_api():
    data = request.json
    response = {
        'received': data,
        'message': 'Llama API response'
    }
    return jsonify(response)
