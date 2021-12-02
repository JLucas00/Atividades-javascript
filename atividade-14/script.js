let vetor = [""];
function vetorCreate(){
   let valor0 = parseInt(document.getElementById("valor0").value);
   let valor1 = parseInt(document.getElementById("valor1").value);
   let valor2 = parseInt(document.getElementById("valor2").value);
   let valor3 = parseInt(document.getElementById("valor3").value);

   vetor=[valor0, valor1, valor2, valor3];

   for(i = 0; i < 4 ; i++){
      document.getElementById("posicao"+i).innerHTML=vetor[i];
   }
}
console.log(vetorCreate())
let vetorInvertido = [""];

function vetorInvert(){
   for(i = 0, j = 3; i < 4 ; i++, j-- ){
      vetorInvertido[i]=vetor[j];
      document.getElementById("resultado"+i).innerHTML=vetorInvertido[i];
   }
}

function vetorOrdened(){
   let vetorOrdenado = vetor;
   for (i = 0 ; i < 4 ; i++){
      for (j = 0 ; j < 4 ; j++){
         if(vetorOrdenado[i] <= vetorOrdenado[j]){
            aux = vetorOrdenado[i];
            vetorOrdenado[i] = vetorOrdenado[j];
            vetorOrdenado[j] = aux;

         }
      }
   }
   for(i = 0, j = 3; i < 4 ; i++, j-- ){
      document.getElementById("resultado"+i).innerHTML=vetorOrdenado[i];
   }
}
