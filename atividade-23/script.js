
function factorial(){

   const factorialNumber = Number(document.getElementById("factorialNumber").value);

   const validationReturn = factorialValidation(factorialNumber);
   let cont = factorialNumber;
   let factorialResponse = 0;

   if(validationReturn){
      factorialResponse = factorialCalcule(cont);
   }else{
      return false;
   }

   document.getElementById("factorialResponse").innerHTML = `${cont}! = ${factorialResponse}`

}

function factorialCalcule(cont){
   if(cont === 0 || cont === 1){
      return 1;
   }else{
      return cont*factorialCalcule(cont-1);
   }
}

function factorialValidation(value){
   if(Number.isInteger(value)){
      document.getElementById("factorialResponse").innerHTML = ``;
      if(value < 0){
         document.getElementById("factorialResponse").innerHTML = `<h3>Não é um número positivo</h3>`;
         console.log("não é positivo");
         return false;
      }else{
         return true;
      }
      
   }else{
      document.getElementById("factorialResponse").innerHTML = `<h3>Não é um inteiro</h3>`;
      console.log("não é inteiro");
      return false;
   }
}



const matriz = [
   [1, 31, 4, 7, 9],
   [10, 3, 7, 0, 2],
   [9, 4, 13, 7, 8],
   [12, 1, 0, 5, 2]
];
let matrizCopied=[[]];

function copyMatriz(contRow, matrizRow){
   
   if(contRow < matrizRow){

      matrizCopied[contRow] = matriz[contRow];
      document.getElementById("matrizResponse").innerHTML += `<h3> ${matrizCopied[contRow]} </h3>`
      contRow += 1
      copyMatriz(contRow, matrizRow);
      
   }else{
      console.log(matrizCopied);
      return matrizCopied;
   }
}

function printMatriz(){

   let contRow = 0;
   let contColumn = 0;
   const matrizRow = matriz.length;
   const matrizColumn = matriz[0].length;
   console.log(matriz)

   copyMatriz(contRow, matrizRow);

   

}