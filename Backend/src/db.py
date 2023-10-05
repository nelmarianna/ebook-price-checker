import pyodbc
from env import DB_USER, DB_PASSWORD, DB_SERVER, DB_DBNAME

class database:
    def __init__(self):
        try:
            USER = DB_USER
            PASSWORD = DB_PASSWORD
            SERVER = DB_SERVER
            DBNAME = DB_DBNAME
        except Exception as e:
            return "Could not access env vars"
        
        connectionString = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={SERVER};DATABASE={DBNAME};UID={USER};PWD={PASSWORD}'
        self.db = pyodbc.connect(connectionString)
        self.db.autocommit = True
    
    def insert(self, query:str, params:list):
        cursor = self.db.cursor()
        cursor.execute(query, params)
        return ""

    def execute(self, query:str, params:list, expectoutput=True):
        cursor = self.db.cursor()
        cursor.execute(query, params)
        if expectoutput:
            records = cursor.fetchall()
            return records