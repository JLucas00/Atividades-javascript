const cors = require("cors");
const express = require("express");
const server = express();
const port = 3001;

server.use(cors());
server.use(express());

server.get("/promise", function(req, res){

   function getRandom(min, max) {
      return Math.random() * (max*1000 - min*1000) + min*1000;
   }

   function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   const randomNumber = getRandomIntInclusive(0, 100);
   const delay = getRandom(0, 10);

   setTimeout(() => {
      res.json({number: randomNumber, delay:delay })
   }, delay);

   
})

server.listen(port);