function filterForSector(funcionarios, sector){

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

export {filterForSector};