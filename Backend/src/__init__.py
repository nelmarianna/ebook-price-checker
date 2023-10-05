from flask import Flask, Response, request
import requests
from src.google import SearchGoogle
import json
import re

def exception_handler(message):
    status_code = 400
    return {"status_code": status_code, "message": message}

def create_app():
    app = Flask(__name__)
    search = SearchGoogle()

    @app.route("/hello")
    def start():
        return {"message": "Hello World!"}
    
    @app.route("/getByIsbn", methods=['POST'])
    def searchByIsbn():
        payload = request.get_json()
        attrs = ['keywords', 'title', 'author', 'publisher', 'subject', 'isbn', 'lccn', 'oclc']
        queryDict = {}
        for attr in attrs:
            queryDict[attr] = payload.get(attr, None)
        if len(attrs) == sum(1 for v in queryDict.values() if v is None):
            return exception_handler("Querying a book requires a field")
        isbnRegex = '^[0-9]{10}|[0-9]{13}$'
        if (queryDict['isbn'] is None and queryDict['keywords'] is not None 
            and len(queryDict['keywords'].split(" ")) == 1
            and re.match(isbnRegex, queryDict['keywords'])):
            queryDict['isbn'] = queryDict['keywords']
            queryDict['keywords'] = None
        try:
            result = search.searchGoogleApi(queryDict)

            return result
        except Exception as e:
            return exception_handler("Failed to query book, " + e.message())

    return app