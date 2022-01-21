const funcionarios = require("./database");

function ordenedRamal(){
   
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