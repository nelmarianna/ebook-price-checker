from flask import Flask, Response, request

def create_app(test_config=None):
    app = Flask(__name__)

    @app.route("/hello")
    def start():
        return {"message": "Hello World!"}
    
    return app