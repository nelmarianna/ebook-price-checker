from flask import Flask, Response, request
import requests
from src.google import SearchGoogle
import json

def exception_handler(message):
    status_code = 400
    return {"status_code": status_code, "message": message}
    return Response(str(message), status_code)

def create_app():
    app = Flask(__name__)
    search = SearchGoogle()

    @app.route("/hello")
    def start():
        return "Hello World!"
    
    @app.route("/getByIsbn", methods=['POST'])
    def searchByIsbn():
        payload = request.get_json()
        attrs = ['keywords', 'title', 'author', 'publisher', 'subject', 'isbn', 'lccn', 'oclc']
        queryDict = {}
        for attr in attrs:
            queryDict[attr] = payload.get(attr, None)
        if len(attrs) == sum(1 for v in queryDict.values() if v is None):
            return exception_handler("Querying a book requires a field")
        try:
            result = search.searchGoogleApi(queryDict)
            print(result)
            return json.dumps(result)
        except Exception as e:
            return exception_handler("Failed to query book, " + e.message())

    # http://127.0.0.1:5000/getByIsbn/9781787285613

    return app