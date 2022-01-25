const fs = require('fs');

function readDatabase() {
   const data = fs.readFileSync("./database.json");
   return JSON.parse(data);
}

function filterForDate(month){

   const funcionarios = readDatabase();

   const  aniversariantesMes = funcionarios.filter((item) => {

      if(parseInt(item.dataNascimento.split("-")[1], 10) === month){
         return true;
      }else{
         return false;
      };
   
   });

   const aniversariantesNome = aniversariantesMes.map((item) =>{
      return item.nome;
   });

   console.log(aniversariantesNome);
   return aniversariantesNome;
};

module.exports = filterForDate;