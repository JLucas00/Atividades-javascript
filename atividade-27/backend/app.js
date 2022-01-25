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

   const {nome, data, email, matricula, ramal, setor} = req.body;

   writeDatabase({nome: nome, dataNascimento: data, email:email, numeroMatricula:matricula, ramal:ramal, setor:setor});

   res.json(req.body);

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