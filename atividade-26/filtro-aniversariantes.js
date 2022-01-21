function filterForDate(funcionarios, month){

   const  aniversariantesMes = funcionarios.filter((item) => {

      if(new Date(item.dataNascimento).getMonth() + 1 === month){
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

export {filterForDate};