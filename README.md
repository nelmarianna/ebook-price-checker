# ebook-price-checker

Hackathon project to create a db service for ebook pricing

## Setup node in your environment

install node version manager https://github.com/coreybutler/nvm-windows
install node v18.15.0

## Install dependencies

go to the ebookprices folder and run npm install

## run the app

go to the ebookprices folder and run npm start to star the server on localhost:3000


## Backend portion
### Run the backend server:

1. Optional: Create a virtual environment
2. Go to the Backend folder
3. install all dependencies using:
```
pip install -r requirements.txt
```
4. with the dependencies, you can run the application using:
```
python -m flask run
```

## Installing the Database

You can download sql Server from:
```
https://www.microsoft.com/en-ca/sql-server/sql-server-downloads
```
When it finishes downloading you will see an option to download SSMS (SQL Server Management Studio) which you will need. 

After opening SSMS, we can start by creating a database. So under the Server, right click "database" and create a new Database. You can name it what ever you want, but I did "Hackathon" as this will be required for the next step.

Now we will create a user in order for the python backend code to access the database. This can be done using: 
```
https://www.guru99.com/sql-server-create-user.html
```
in my example I used 
```
username: developer
password: P@ssword!
```
If you are able to grant permissions to the user that is great, but I was not able to and could not add tables as the database owner. 
If you want to run commands through the cli or faced the problem above, you will have to alter the user login for the sql server to allow SQL authentication:
```
https://dba.stackexchange.com/questions/170762/sqlcmd-new-login-user
``` 

At this point, when you open the command terminal and type the command
```
sqlcmd -S {Server_location} -d {database_name} -U {username} -P {password}
```
so in my case it was:
```
sqlcmd -S {server_location} -d Hackathon -U developer -P P@ssword!
```
This should connect into the database you want. At this point you can create a env.py file under the Backend folder with the following structure (this is my example):

```python
DB_USER = 'developer'
DB_PASSWORD = 'P@ssword!'
DB_SERVER = {your server location}
DB_DBNAME = 'Hackathon'
```

You can confirm that connection succeeded by running the backend which should initialize the database connection first (unless I changed the code).

Now you need to create the tables. 
If you are unlucky and could not get the permissions for the user from the first link, you will have to do some back and forth. 
In the CreateTables.sql file is the schema for all the tables, copy each of them and paste it into the command terminal that started a connection to the database 
(where you ran the sqlcmd command). 
After each table hit enter and then go to execute the command (I believe it is using a form of t-sql so you need go to commit the transaction).

This is where the back and forth comes in, you will have to go to SSMS, right click your databse, hit refresh to show your created table.
Then right click the new table > properties > permissions > search (find your username add it) then add all the required permissions for that user to access the table. 

Repeat this process for all tables.

At this point (hopefully) all the tables are set up in the database, which the created user (that you are allowing the python backend to use) can access. 
