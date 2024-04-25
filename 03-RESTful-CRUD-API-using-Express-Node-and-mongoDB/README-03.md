# 03-RESTful-CRUD-API-using-Express-Node-and-mongoDB
## RESTful CRUD (Create, Read, Update, Delete) API using Express.js, Node.js and mongoDB
### Author: Code with Arjun
[RESTful CRUD (Create, Read, Update, Delete) API using Express.js, Node.js and mongoDB](https://youtu.be/BpXaVQSdo_E?list=PL1oBBulPlvs8fI_rDfE6U25BcKkkWDS5T&t=17)
### open mongo db compass
- open mongo db compass
- press connect
- create a new database:
  - Database Name: dbconnect
  - Collection Name: users
  - press 'Create Database' button
### Installation of node envirenment
- $ cd 02-Connect-MongoDB-with-Node.js-using-mongoose-MongoDB-and-Express.js
- $ npm init --yes
- $ npm i express
- $ npm i mongoose
- $ npm i --save-dev nodemon
- $ npm i dotenv
- add json formatter to Brave
- add following line to package.json file
````
  "type": "module",
  "scripts": {
    "start": "nodemon index.js",
    ...
  },
````
- create new file .env
- add yhese lines to .env file
````
PORT = 8000
MONGO_URL = "mongodb://localhost:27017/dbconnect"
````
### How to run
- $ npm start
### To see the web output
[web output](http://localhost:8000/getUsers)
