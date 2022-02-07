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


class Calculadora{
   constructor(operand1, operand2, operation){
      this.operand1 = operand1;
      this.operand2 = operand2;
      this.operation = operation;
   }
   setOperand1(_operand1){
      this.operand1 = _operand1;
   }
   setOperand2(_operand2){
      this.operand2 = _operand2;
   }
   setOperation(_operation){
      this.operation = _operation;
   }
   getResult(){

      switch (this.operation){
         case "":
            return this.operand1;
         case "+":
            return (Number(this.operand1)+Number(this.operand2));
         case "-":
            return (Number(this.operand1)-Number(this.operand2));
         case "*":
            return (Number(this.operand1)*Number(this.operand2));
         case "/":
            return (Number(this.operand1)/Number(this.operand2));
      }
   }
   clearCalculator(){
      this.operand1 = "0";
      this.operand2 = "0";
      this.operation = ""
   }
}
const calculator = new Calculadora("0","0","");


server.post('/calculadora', function(req,res){

   const calculator = new Calculadora("0","0","");
   calculator.setOperand1(req.body.operand1)
   calculator.setOperand2(req.body.operand2)
   calculator.setOperation(req.body.operation)

   res.json(calculator.getResult());

});


server.post('/funcionarios/database', function(req,res){

   const database = readDatabase();
   let id = database[datlength - 1].id + 1;
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
   
   // import { filterForDate } from './modulos-backend/filtro-aniversariantes';

   const mes = Number(req.query.mes);

   const aniversariantes = filterForDate(mes);

   res.json(aniversariantes);
   
});

server.get('/funcionarios/setor', function(req, res){
   
   // import { filterForSector } from './modulos-backend/filtro-setor';

   const setor = req.query.setor;

   const funcionariosSetor = filterForSector(setor);

   res.json(funcionariosSetor);
   
});

server.get('/funcionarios/ramal', function(req, res){
   
   //import { workerOrdenedRamal } from './modulos-backend/ordem-alfabetica-ramal';

   const funcionariosRamal = ordenedRamal();

   res.json(funcionariosRamal);
   
});

server.listen(port);