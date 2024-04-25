# 02-Connect-MongoDB-with-Node.js-using-mongoose-MongoDB-and-Express.js
## Connect MongoDB with Node.js using mongoose | MongoDB + Express.js
### Author: Code with Arjun
[Connect MongoDB with Node.js using mongoose | MongoDB + Express.js](https://youtu.be/30p9QfybWZg?list=PL1oBBulPlvs8fI_rDfE6U25BcKkkWDS5T&t=168)
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
