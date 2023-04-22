import json

from flask import request

from flask import Flask, render_template

import requests
from pprint import pprint

app = Flask(__name__)


_pprint = print
# print = pprint

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
