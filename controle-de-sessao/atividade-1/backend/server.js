const cors = require("cors");
const express = require("express");
const server = express();
const bodyParser = require('body-parser')
const port = 3001;
const fs = require('fs');
const users = require("./users.json")

server.use(cors());
server.use(express());
server.use(bodyParser.json())

function readDatabase() {
   //const data = fs.readFileSync("users.json");
   //return JSON.parse(data);
   return usersdata;
}
let usersdata = [
   {
      "name": "anderson",
      "password": "ands007",
      "token": ""
   },
   {
      "name": "josepaulo",
      "password": "jp123",
      "token": ""
   },
   {
      "name": "pedrinho",
      "password": "pdrinho123",
      "token": ""
   },
   {
      "name": "manuelportugal",
      "password": "manuel123",
      "token": ""
   },
   {
      "name": "felipefernandes",
      "password": "fefe",
      "token": ""
   }
]

function writeDatabase(data) {
   usersdata = data;
   //fs.writeFileSync("users.json", JSON.stringify([...data]));
}

server.post("/session", function(req, res){
   const username = req.body.username;
   const password = req.body.password;

   let verifylogin = false;

   const min = 1;
   const max = 1000000;
   const token = Math.floor(Math.random() * (max - min)) + min;

   const users = readDatabase();
   const usertoken = users.map(element => {
      if(element.name === username.toLowerCase() && element.password === password){
         verifylogin = true;
         return {...element, token: token}
      }
      return {...element};
   });
   
   writeDatabase(usertoken);
   
   if(verifylogin){
      res.send(String(token));
   }else{
      res.status(404).send("User not found")
      
   }
})

server.post("/message", function(req, res){
   const token = Number(req.body.token);
   let verifysession = false
   let name = ""
   const users = readDatabase();
   users.forEach((element) => {
      if(element.token === token){
         verifysession = true;
         name = element.name;
      }
   })


   if(verifysession){
      res.send(name)
   }else{
      res.status(404).send("User token not found")
   }
})

server.listen(port)