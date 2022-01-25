const filterForDate = require("./components/filtro-aniversariantes.js");
const filterForSector = require("./components/filtro-setor.js");
const ordenedRamal = require("./components/ordem-alfabetica-ramal.js");
const cors = require("cors");
const fs = require('fs');

const express = require('express');
const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());


function readDatabase() {
   const data = fs.readFileSync("database.json");
   return JSON.parse(data);
}
 
function writeDatabase(newData) {
   const database = readDatabase();
   fs.writeFileSync("database.json", JSON.stringify([...database, newData]));
}


server.post('/funcionarios/database', function(req,res){

   const database = readDatabase();
   let id = database[database.length - 1].id + 1;
   const {nome, data, email, ramal, setor} = req.body;

   writeDatabase({id: id, name: nome, email:email, extension:ramal, birthDay: data, sector:setor});

   res.json(req.body);

});

server.get('/start', function(req,res){
   
   const database = readDatabase();
   const datasector = database.map(element => {
      return element.sector;
   });
   datasector.sort();

   const filteredSector = datasector.filter(function(ele , pos){
      return datasector.indexOf(ele) == pos;
  }) 
   
   res.json(filteredSector);

});


server.get('/funcionarios/aniversariantes', function(req, res){
   
   /* import { filterForDate } from './modulos-backend/filtro-aniversariantes'; */

   const mes = Number(req.query.mes);

   const aniversariantes = filterForDate(mes);

   res.json(aniversariantes);
   
});

server.get('/funcionarios/setor', function(req, res){
   
   /* import { filterForSector } from './modulos-backend/filtro-setor'; */

   const setor = req.query.setor;

   const funcionariosSetor = filterForSector(setor);

   res.json(funcionariosSetor);
   
});

server.get('/funcionarios/ramal', function(req, res){
   
   /* import { workerOrdenedRamal } from './modulos-backend/ordem-alfabetica-ramal'; */

   const funcionariosRamal = ordenedRamal();

   res.json(funcionariosRamal);
   
});

server.listen(port);