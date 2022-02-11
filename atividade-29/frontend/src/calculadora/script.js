const url = "http://localhost:3001";

let operando = "0";
const calculator = 
{
operand1:"0",
operation: "",
operand2: "0"
}

const display = document.getElementById("display-text");

document.getElementById("btn-1").addEventListener("click", insertOperand);
document.getElementById("btn-2").addEventListener("click", insertOperand);
document.getElementById("btn-3").addEventListener("click", insertOperand);
document.getElementById("btn-4").addEventListener("click", insertOperand);
document.getElementById("btn-5").addEventListener("click", insertOperand);
document.getElementById("btn-6").addEventListener("click", insertOperand);
document.getElementById("btn-7").addEventListener("click", insertOperand);
document.getElementById("btn-8").addEventListener("click", insertOperand);
document.getElementById("btn-9").addEventListener("click", insertOperand);
document.getElementById("btn-0").addEventListener("click", insertOperand);
document.getElementById("btn-dot").addEventListener("click", insertOperand);

document.getElementById("btn-adition").addEventListener("click", insertOperation);
document.getElementById("btn-subtration").addEventListener("click", insertOperation);
document.getElementById("btn-multiplication").addEventListener("click", insertOperation);
document.getElementById("btn-division").addEventListener("click", insertOperation);

document.getElementById("btn-equal").addEventListener("click", insertResult);

document.getElementById("btn-del").addEventListener("click", deleteNumber);
document.getElementById("btn-ce").addEventListener("click", cancelEntry);

function insertOperand(){
   
   if(operando === "0"){
      if(this.value === "."){
         display.innerHTML += this.value;
         operando = operando.concat(this.value);
      }else{
         display.innerHTML = this.value;
         operando = this.value;
      }
   }else if(operando.length < 13){
      display.innerHTML += this.value;
      operando = operando.concat(this.value);
   }

   return operando;
}

function insertOperation(){

   if(calculator.operation === ""){
      calculator.operand1 = operando;
      operando = "0";
      display.innerHTML = "0";

      switch (this.value){
         case "+":
            calculator.operation = (this.value);
            return calculator.operation;
         case "-":
            calculator.operation = (this.value);
            return calculator.operation;
         case "*":
            calculator.operation = (this.value);
            return calculator.operation;
         case "/":
            calculator.operation = (this.value);
            return calculator.operation;
      }
   }else{
      //insertResult();
      
      switch (this.value){
         case "+":
            calculator.operation = (this.value);
            return calculator.operation;
         case "-":
            calculator.operation = (this.value);
            return calculator.operation;
         case "*":
            calculator.operation = (this.value);
            return calculator.operation;
         case "/":
            calculator.operation = (this.value);
            return calculator.operation;
      }
   }
   
}

function insertResult(){
   calculator.operand2 = (operando);
   console.log(calculator.operand1)
   console.log(calculator.operation)
   console.log(calculator.operand2)
   fetch(`${url}/calculadora`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         operand1: calculator.operand1,
         operation: calculator.operation,
         operand2: calculator.operand2,
         clear: false
      })
   })
      .then(
         function (response) {
            if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' + response.status);
               return;
            }
   
            // Examine the text in the response
            response.json().then(function (data) {
               
               data = Number(data);
               display.innerHTML = data;

               if(Number.isInteger(data)){
                  display.innerHTML = data;
               }else{
                  display.innerHTML = Number(data).toFixed(4);
               }
               calculator.operand1 = `${data}`;
               operando = `${data}`
               calculator.operation = "";
               calculator.operand2 = "0";
               
               return data;
            });
         }
      )
      .catch(function (err) {
         console.log('Fetch Error :-S', err);
      });
}

function deleteNumber(){
   operando = operando.slice(0,-1);
   display.innerHTML = operando;

}

function  cancelEntry(){
   operando = "0"
   display.innerHTML = operando;
   

   fetch(`${url}/calculadora`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         clear: true
      })
   })
      .then(
         function (response) {
            if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' + response.status);
               return;
            }
   
            // Examine the text in the response
            response.json().then(function (data) {
               console.log(data);

               calculator.operand1 = data.operand1;
               calculator.operation = data.operation;
               calculator.operand2 = data.operand2;
               return data;
            });
         }
      )
      .catch(function (err) {
         console.log('Fetch Error :-S', err);
      });
}
