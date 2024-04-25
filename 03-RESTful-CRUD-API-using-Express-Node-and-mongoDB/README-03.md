# 03-RESTful-CRUD-API-using-Express-Node-and-mongoDB
## RESTful CRUD (Create, Read, Update, Delete) API using Express.js, Node.js and mongoDB
### Author: Code with Arjun
[RESTful CRUD (Create, Read, Update, Delete) API using Express.js, Node.js and mongoDB](https://youtu.be/BpXaVQSdo_E?list=PL1oBBulPlvs8fI_rDfE6U25BcKkkWDS5T&t=17)
### open mongo db compass
- open mongo db compass
- press connect
- create a new database:
  - Database Name: curd
  - Collection Name: users
  - press 'Create Database' button
### Installation of node envirenment
- $ cd 03-RESTful-CRUD-API-using-Express-Node-and-mongoDB
- $ npm init --yes
- $ npm i express
- $ npm i mongoose
- $ npm i --save-dev nodemon
- $ npm i dotenv
- $ npm i body-parser
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
MONGO_URL = "mongodb://localhost:27017/curd"
````
### How to run
- $ npm start
- create a new folder model by name
- create a new file userModel.js by name
- create a new folder controller by name
- create a new file userController.js by name
- create a new folder routes by name
- create a new file userRoute.js by name

### To see the web output
[web output](http://localhost:8000/api/user/fetch)
````
"Hello World"
````