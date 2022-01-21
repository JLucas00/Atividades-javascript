import {filterForDate} from "./filtro-aniversariantes.js";
import {filterForSector} from "./filtro-setor.js";
import {ordenedRamal} from "./ordem-alfabetica-ramal.js";

const express = require('express');
const server = express();
const port = 8080;
server.use(express.static("public"));




const funcionarios = [
   {
      numeroMatricula: 1230,
      nome: "José Antônio",
      ramal: 5001,
      email: "jose.ant@gmail.com",
      setor: "administrativo",
      dataNascimento: "1993/09/04"
   },
   {
      numeroMatricula: 1231,
      nome: "João Paulo",
      ramal: 5002,
      email: "joao.paulo@gmail.com",
      setor: "administrativo",
      dataNascimento: "1995/10/11"
   },
   {
      numeroMatricula: 1232,
      nome: "José Mário",
      ramal: 5004,
      email: "jose.mario@gmail.com",
      setor: "financeiro",
      dataNascimento: "1999/07/11"
   },
   {
      numeroMatricula: 1233,
      nome: "Maria Eunice",
      ramal: 5005,
      email: "maria.eunice@gmail.com",
      setor: "marketing",
      dataNascimento: "1995/11/18"
   },
   {
      numeroMatricula: 1234,
      nome: "Felipe Alves",
      ramal: 5006,
      email: "felipe.alves@gmail.com",
      setor: "marketing",
      dataNascimento: "1998/07/13"
   },
   {
      numeroMatricula: 1235,
      nome: "Bruna Ferreira",
      ramal: 5007,
      email: "bruna.ferreira@gmail.com",
      setor: "RH",
      dataNascimento: "1991/04/12"
   },
   {
      numeroMatricula: 1236,
      nome: "Bruno Rodrigo",
      ramal: 5008,
      email: "bruno.rodrigo@gmail.com",
      setor: "RH",
      dataNascimento: "1997/11/11"
   },
   {
      numeroMatricula: 1237,
      nome: "Marcelo Junior",
      ramal: 5009,
      email: "marcelo.junior@gmail.com",
      setor: "financeiro",
      dataNascimento: "1994/04/01"
   },

];

server.get('/funcionarios/aniversariantes', function(req, res){
   
   /* import { filterForDate } from './modulos-backend/filtro-aniversariantes'; */

   const mes = 11;

   const aniversariantes = filterForDate(funcionarios, mes);

   res.json(aniversariantes);
   
});

server.get('/funcionarios/setor', function(req, res){
   
   /* import { filterForSector } from './modulos-backend/filtro-setor'; */

   const setor = "RH";

   const funcionariosSetor = filterForSector(funcionarios, setor);

   res.json(funcionariosSetor);
   
});

server.get('/funcionarios/ramal', function(req, res){
   
   /* import { workerOrdenedRamal } from './modulos-backend/ordem-alfabetica-ramal'; */

   const funcionariosRamal = ordenedRamal(funcionarios);

   res.json(funcionariosRamal);
   
});

server.listen(8080);