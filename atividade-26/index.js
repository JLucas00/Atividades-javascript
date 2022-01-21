const filterForDate = require("./modulos-backend/filtro-aniversariantes");
const filterForSector = require("./modulos-backend/filtro-setor");
const ordenedRamal = require("./modulos-backend/ordem-alfabetica-ramal");

const express = require('express');
const server = express();
const port = 8080;
server.use(express.static("public"));

server.get('/funcionarios/aniversariantes', function(req, res){
   
   /* import { filterForDate } from './modulos-backend/filtro-aniversariantes'; */

   const mes = 11;

   const aniversariantes = filterForDate(mes);

   res.json(aniversariantes);
   
});

server.get('/funcionarios/setor', function(req, res){
   
   /* import { filterForSector } from './modulos-backend/filtro-setor'; */

   const setor = "RH";

   const funcionariosSetor = filterForSector(setor);

   res.json(funcionariosSetor);
   
});

server.get('/funcionarios/ramal', function(req, res){
   
   /* import { workerOrdenedRamal } from './modulos-backend/ordem-alfabetica-ramal'; */

   const funcionariosRamal = ordenedRamal();

   res.json(funcionariosRamal);
   
});

server.listen(8080);