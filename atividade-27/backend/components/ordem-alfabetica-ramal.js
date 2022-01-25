const fs = require('fs');

function readDatabase() {
   const data = fs.readFileSync("./database.json");
   return JSON.parse(data);
}

function ordenedRamal(){
   
   const funcionarios = readDatabase();
   const  worker = funcionarios.map((item) => {
      return item.nome;
   });

   const workerOrdened = worker.sort();
   let workerOrdenedRamal = [];

   workerOrdened.forEach((itemOrdened, index) =>{
      workerOrdenedRamal[index] = {
         nome: itemOrdened,
      };
      funcionarios.forEach((item) => {
         if(item.nome === itemOrdened){
            workerOrdenedRamal[index].ramal = item.ramal;
         }
      });
   });

   console.log(workerOrdenedRamal);
   return workerOrdenedRamal;
};

module.exports = ordenedRamal;