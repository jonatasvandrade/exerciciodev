import json
from flask import request
from flask import Flask, render_template
app = Flask(__name__)

import requests
from pprint import pprint
_pprint = print
# print = pprint

@app.route('../../')
def index():
    return render_template('../../index.html')
@app.route('/test', methods=['POST'])
def test():
    output = request.get_json()
    print(output) # This is the output that was stored in the JSON within the browser
    print(type(output))
    result = json.loads(output) #this converts the json output to a python dictionary
    print(result) # Printing the new dictionary
    print(type(result))#this shows the json converted as a python dictionary
    return result

url = "http://127.0.0.1:3001/users"

user_data = {  
    "nome": "JONATAS",
    "password": "123456",
    "email": "jonatasvandrade@gmail.com"
}

response = requests.post(url=url, json=user_data)

if response.status_code >= 200 and response.status_code <= 299:
    # Sucesso
    print('Status Code', response.status_code)
    print('Reason', response.reason)
    print('Texto', response.text)
    print('JSON', response.json())

else:
    # Erros
    print('Status Code', response.status_code)
    print('Reason', response.reason)
    print('Texto', response.text)
