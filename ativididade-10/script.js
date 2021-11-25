let operacao=""
function operador(elemento){
   operacao=elemento;
   let calculo;
   switch(operacao){
      case "adicao":
         calculo="+";
         document.getElementById("print-resultado1").innerHTML="operação: " + calculo + " adição";
         break;
      case "subtracao":
         calculo="-";
         document.getElementById("print-resultado1").innerHTML="operação: " + calculo + " subtração";
      break;
      case "multiplicacao":
         calculo="*";
         document.getElementById("print-resultado1").innerHTML="operação: " + calculo + " multiplicação";
         break;
      case "divisao":
         calculo="/"
         document.getElementById("print-resultado1").innerHTML="operação: " + calculo + " divisão";
         break;
      default:
         calculo="undefined";
         break;
   }
   return (operacao);
}


function limpar(){
   document.getElementById("print-resultado1").innerHTML="";
   document.getElementById("print-resultado2").innerHTML="";
}

/* let a=operador();
console.log(a); */


function calcula(){
   let num1=document.getElementById("numero1").value;
   let num2=document.getElementById("numero2").value;
   num1=parseFloat(num1, 2);
   num2=parseFloat(num2, 2);

   let resultado;


   switch(operacao){
      case "adicao":
         resultado= num1 + num2;
         document.getElementById("print-resultado2").innerHTML+="</br>" + num1 + "+" + num2 + " = " + resultado;
         break;
      case "subtracao":
         resultado= num1 - num2;
         document.getElementById("print-resultado2").innerHTML+="</br>" + num1 + "-" + num2 + " = " + resultado;
      break;
      case "multiplicacao":
         resultado= num1 * num2;
         document.getElementById("print-resultado2").innerHTML+="</br>" + num1 + "*" + num2 + " = " + resultado;
         break;
      case "divisao":
         resultado= num1 / num2;
         document.getElementById("print-resultado2").innerHTML+="</br>" + num1 + "/" + num2 + " = " + resultado;
         break;
      default:
         resultado= undefined
         document.getElementById("print-resultado2").innerHTML+= "</br>" + "resultado" + " = " + resultado;
         break;
   }

   console.log(num1);
   console.log(num2);
}


