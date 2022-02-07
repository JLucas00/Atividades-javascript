$(document).ready(function(){
   class Calculadora{
      constructor(operand1, operand2, operation){
         this.operand1 = operand1;
         this.operand2 = operand2;
         this.operation = operation;
      }
      setOperand1(_operand1){
         this.operand1 = _operand1;
      }
      setOperand2(_operand2){
         this.operand2 = _operand2;
      }
      setOperation(_operation){
         this.operation = _operation;
      }
      getResult(){
   
         switch (this.operation){
            case "":
               return this.operand1;
            case "+":
               return (Number(this.operand1)+Number(this.operand2));
            case "-":
               return (Number(this.operand1)-Number(this.operand2));
            case "*":
               return (Number(this.operand1)*Number(this.operand2));
            case "/":
               return (Number(this.operand1)/Number(this.operand2));
         }
      }
      clearCalculator(){
         this.operand1 = "0";
         this.operand2 = "0";
         this.operation = ""
      }
   }

   const calculator = new Calculadora("0","0","");
   let operando = "0";
   const display = document.getElementById("display-text");

   $("#btn-1").click(insertOperand);
   $("#btn-2").click(insertOperand);
   $("#btn-3").click(insertOperand);
   $("#btn-4").click(insertOperand);
   $("#btn-5").click(insertOperand);
   $("#btn-6").click(insertOperand);
   $("#btn-7").click(insertOperand);
   $("#btn-8").click(insertOperand);
   $("#btn-9").click(insertOperand);
   $("#btn-0").click(insertOperand);
   $("#btn-dot").click(insertOperand);

   $("#btn-adition").click(insertOperation);
   $("#btn-subtration").click(insertOperation);
   $("#btn-multiplication").click(insertOperation);
   $("#btn-division").click(insertOperation);

   $("#btn-equal").click(insertResult);

   $("#btn-del").click(deleteNumber);
   $("#btn-ce").click(cancelEntry);

   $("button").hover(function(){
      $(this).css("background-color", "yellow");
    },
    function(){
      $(this).css("background-color", "rgb(219, 192, 245)");
    });

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
         calculator.setOperand1(operando);
         operando = "0";
         display.innerHTML = "0";

         switch (this.value){
            case "+":
               return calculator.setOperation(this.value);
            case "-":
               return calculator.setOperation(this.value);
            case "*":
               return calculator.setOperation(this.value);
            case "/":
               return calculator.setOperation(this.value);
         }
      }else{
         //insertResult();
         switch (this.value){
            case "+":
               return calculator.setOperation(this.value);
            case "-":
               return calculator.setOperation(this.value);
            case "*":
               return calculator.setOperation(this.value);
            case "/":
               return calculator.setOperation(this.value);
         }
      }
      
   }

   function insertResult(){
      calculator.setOperand2(operando);
      operando = calculator.getResult();
      display.innerHTML = operando;

      if(Number.isInteger(operando)){
         display.innerHTML = operando;
      }else{
         display.innerHTML = operando.toFixed(4);
      }
      console.log(operando)
      calculator.setOperand1(operando);
      calculator.setOperation("");
      return calculator.getResult();
   }

   function deleteNumber(){
      operando = operando.slice(0,-1);
      display.innerHTML = operando;
   }

   function  cancelEntry(){
      calculator.clearCalculator();
      operando = "0"
      display.innerHTML = operando;
   }


})




