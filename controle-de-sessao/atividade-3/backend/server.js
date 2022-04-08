const cors = require("cors");
const express = require("express");
const server = express();
const bodyParser = require('body-parser')
const port = 3001;
const fs = require('fs');
const users = require("./users.json")
const bcrypt = require('bcrypt');

const cryptografia = require("./criptografia/crypto");

const cookieParser = require('cookie-parser');
server.use(cors({origin: ["http://localhost:8080"], credentials: true}));
server.use(express());
server.use(bodyParser.json());
server.use(cookieParser());

async function createHash(param){
   const user = param;
   const saltRounds = 10;
   const myPlaintextPassword = user;
   const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
   return hash;
}

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

server.post("/login", async function(req, res){
   const username = req.body.username;
   const password = req.body.password;
   let verifylogin = false;
   
   const users = readDatabase();
   const hash = await createHash(username);
   const hashCrypto = cryptografia.encrypt(hash);
   const usertoken = users.map((element, index) => {

      if(element.name.toLowerCase() === username.toLowerCase() && element.password === password){
         verifylogin = true;
         return {...element, cookie: `${hash}`}
      }
      return {...element};
   });
   
   writeDatabase(usertoken);
   
   if(verifylogin){
      res.cookie("name", `${hashCrypto.content}`, {secure: true, httpOnly: true });
      res.cookie("iv", `${hashCrypto.iv}`)
      res.send('Cookie has been set');
   }else{
      res.status(404).send("Error: Cookie has not been set"); 
   }
})

server.get("/message", function(req, res){
   const token = req.cookies.name;
   const iv = req.cookies.iv;

   const tokenDescrypto = cryptografia.decrypt(token, iv);
   let verifysession = false;
   let name = "";
   const users = readDatabase();
   users.forEach((element) => {
      if(element.cookie === tokenDescrypto){
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