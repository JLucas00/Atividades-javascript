let cont=0;
let memory = []
let delay = [];
let juros = [];
let valor = [];
let client = {};
function calculate(){

   if(document.getElementById("name").value != "" && document.getElementById("date").value != "" && document.getElementById("debt").value != ""){
      

      
      document.getElementById("alert").innerHTML = ``;
      client = {
         cname : document.getElementById("name").value,
         duedate : document.getElementById("date").value,
         debt : document.getElementById("debt").value
      }
      memory.push(client);
 
      duedate = new Date(client.duedate);
      let present_date = new Date();
      let dateFormated = ((present_date.getDate() )) + "/" + ((present_date.getMonth() + 1)) + "/" + present_date.getFullYear();
      let duedateFormated = ((duedate.getDate()+1 )) + "/" + ((duedate.getMonth() + 1)) + "/" + duedate.getFullYear();
   
      
      let diference = present_date.getTime() - duedate.getTime();
      diference = parseInt(diference/(1000*3600*24));
      
   
      if (diference > 0){
         delay[cont] = diference;
         juros[cont] = 0.02+0.001*delay[cont];
         valor[cont] = (juros[cont]*client.debt);
      }else{
         juros[cont] = 0;
         delay[cont] = "Dentro do prazo";
         valor[cont] = client.debt;
      }
      
      
      

      document.querySelector("#tabela").innerHTML += anotation;
      console.log(anotation);
      

      cont++;

   }else{
      document.getElementById("alert").innerHTML = `Preencha todos os campos`;
   }
   
}
let anotation = memory.map(function(item, index){
   return `<tr>
               <td>${memory[index].cname}</td>
               <td>${memory[index].duedate}</td>
               <td>${memory[index].debit}</td>
               <td>${delay[cont]}</td>
               <td>${juros[cont]}</td>
               <td>${valor[cont]}</td>
          </tr>`;

});
