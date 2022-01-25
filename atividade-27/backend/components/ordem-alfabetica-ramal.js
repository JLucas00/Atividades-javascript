const fs = require('fs');

function readDatabase() {
   const data = fs.readFileSync("./database.json");
   return JSON.parse(data);
}

function ordenedRamal(){
   
   const funcionarios = readDatabase();
   
   const  worker = funcionarios.map((item) => {
      return {id: item.id, name: item.name, extension: item.extension};
   });

   let workerOrdened = worker.sort(function (ant, pos){
      const compareAnt = ant.name.toLowerCase();
      const comparePos = pos.name.toLowerCase();

      return compareAnt == comparePos ? 0 : compareAnt > comparePos ? 1 : -1;
   });

   return workerOrdened;
};

module.exports = ordenedRamal;