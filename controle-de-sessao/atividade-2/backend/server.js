const cors = require("cors");
const express = require("express");
const server = express();
const bodyParser = require('body-parser')
const port = 3001;
const fs = require('fs');
const users = require("./users.json")

const cookieParser = require('cookie-parser');
server.use(cors({origin: ["http://localhost:8080"], credentials: true}));
server.use(express());
server.use(bodyParser.json())
server.use(cookieParser());

function readDatabase() {
   const data = fs.readFileSync("users.json");
   return JSON.parse(data);
   //return usersdata;
}
/* let usersdata = [
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
] */

function writeDatabase(data) {
   usersdata = data;
   fs.writeFileSync("users.json", JSON.stringify([...data]));
}

server.post("/login", function(req, res){
   const username = req.body.username;
   const password = req.body.password;
   let verifylogin = false;
   
   const users = readDatabase();
   const usertoken = users.map((element, index) => {

      if(element.name.toLowerCase() === username.toLowerCase() && element.password === password){
         res.cookie("name", `${username}`, {secure: true, httpOnly: true })
         verifylogin = true;
         return {...element, cookie: `${username}`}
      }
      return {...element};
   });
   
   writeDatabase(usertoken);
   
   if(verifylogin){
      res.send('Cookie has been set');
   }else{
      res.status(404).send("Error: Cookie has not been set"); 
   }
})

server.get("/message", function(req, res){
   const token = req.cookies.name;
   console.log(token);
   let verifysession = false;
   let name = "";
   const users = readDatabase();
   users.forEach((element) => {
      if(element.cookie === token){
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