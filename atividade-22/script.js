function multiply(value){
   return function(){
      const result = value * 5;
      return result;
      
   }
};

function multiplyBy5(){
   let value = document.getElementById("number").value;
   value = Number(value, 10);

   if (Number.isInteger(value)){
      const post = multiply(value);
      post();
      console.log(post());

      document.getElementById("result-multiply").innerHTML = `<p> O resultado é ${post()}</p>`
   } else{
      document.getElementById("result-multiply").innerHTML = `<p>${value} Não é um número inteiro</p>`
   }
}

function changeSize(){
   let size = 16;
   function getSize(){
      return size;
   }
   function change(count){
      size += count;
      return size;
   }
   return {getSize, change};
};

const resultSize = changeSize();
function decrementSize(){
   const count = -2;
   console.log(count)
   resultSize.change(count)
   console.log(resultSize.getSize(count));
   document.getElementById("history").style.fontSize = resultSize.getSize(count) + "px";
}
function incrementSize(){
   const count = 2;
   console.log(count);

   resultSize.change(count)
   console.log(resultSize.getSize(count));
   document.getElementById("history").style.fontSize = resultSize.getSize(count) + "px";
}

