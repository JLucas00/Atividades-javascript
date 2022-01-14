
const array1 = Array(4).fill(4).map((_, i) => i+1);
const array2 = Array(4).fill(4).map((_, i) => i*2);

console.log(`vetor 1:`);
console.log(array1);
console.log(`vetor 2:`);
console.log(array2);
console.log(``);


// Primeira questão
function multiply(p1, p2, p3, p4){

   return p1*p2*p3*p4;
}
const result = multiply(...array1);
console.log(`O produto dos elementos do vetor 1 é: ${result}`);
console.log(``);

// Segunda questão
function concatenar(array1, array2){
   const arrayconcat = [...array1, ...array2]
   return arrayconcat;
}
const arrayconcat = concatenar(array1, array2);
console.log(`O array concatenado é: `);
console.log(arrayconcat);
console.log(``);


// Terceira questão

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
const array3 = [];
function maxRandomNumber(){
   for(let i=0; i<10 ; i++){
      array3[i] = getRandomIntInclusive(1, 100);
   }
   console.log(`o vetor com os números sorteados é:`)
   console.log(array3)
   console.log(``);

   const maxValue = Math.max(...array3);
   console.log(`O valor máximo contido no vetor é:`);
   console.log(maxValue);
}
maxRandomNumber();


