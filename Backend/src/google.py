import requests
import json

class SearchGoogle:
    def __init__(self, db):
        self.db = db

    def searchGoogleApi(self, queryParams):
        query = ""
        for key, value in queryParams.items():
            if key == "keywords" and value is not None:
                words = value.split(' ')
                for word in words:
                    query += "{}+".format(word)
            elif value is not None:
                query += "{}:{}+".format(key, value)
        query = query[:-1]
        output = requests.get('https://www.googleapis.com/books/v1/volumes?q={}&filter=ebooks'.format(query))
        return ({
            'query': query,
            'results': self.parseGoogleResults(output.content)
            })

    def parseGoogleResults(self, content):
        content = json.loads(content)
        bookInfo = []
        for item in content.get("items", []):
             itemDetails = {}
             itemDetails["selfLink"] = item.get("selfLink", "Unknown")
             itemDetails["volumeInfo"] = item.get("volumeInfo", "Unknown")
             itemDetails['saleInfo'] = item.get("saleInfo", "Unknown")
             bookInfo.append(itemDetails)
        return bookInfo