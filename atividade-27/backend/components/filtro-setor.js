const fs = require('fs');

function readDatabase() {
   const data = fs.readFileSync("./database.json");
   return JSON.parse(data);
}

function filterForSector(sector){

   const funcionarios = readDatabase();
   
   const  workerSector = funcionarios.filter((item) => {

      if(item.setor === sector){
         return true;
      }else{
         return false;
      };
   
   });

   const worker = workerSector.map((item) =>{
      return item.nome;
   });

   console.log(worker);
   return worker;
};

module.exports = filterForSector;