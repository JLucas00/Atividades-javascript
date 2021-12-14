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
         debt : Number(document.getElementById("debt").value)
      }
      memory.push(client);
 
      duedate = new Date(client.duedate);
      let present_date = new Date();
      let dateFormated = ((present_date.getDate() )) + "/" + ((present_date.getMonth() + 1)) + "/" + present_date.getFullYear();
      let duedateFormated = ((duedate.getDate()+1 )) + "/" + ((duedate.getMonth() + 1)) + "/" + duedate.getFullYear();
   
      
      let diference = present_date.getTime() - duedate.getTime();
      diference = parseInt(diference/(1000*3600*24), 10);
      
      
      if (diference > 0){
         delay[cont] = diference;
         juros[cont] = 0.02+0.001*delay[cont];
         valor[cont] = client.debt + juros[cont]*client.debt;
      }else{
         juros[cont] = 0;
         delay[cont] = "Dentro do prazo";
         valor[cont] = client.debt;
      }
      
      let anotation = memory.map(function(item, cont){
         return `<tr>
                     <td>${item.cname}</td>
                     <td>${item.duedate}</td>
                     <td>${formateGrana(item.debt)}</td>
                     <td>${delay[cont]}</td>
                     <td>${(juros[cont])*100} % </td>
                     <td>${formateGrana(valor[cont])}</td>
                </tr>`;
      
      });

      anotation.unshift(
         `<tr>
            <th>Nome do Cliente</th>
            <th>Data de Vencimento</th>
            <th>Valor da Compra</th>
            <th>Atraso (dias)</th>
            <th>Juros</th>
            <th>Valor com Juros</th>
         </tr>`)

      document.getElementById("tabela").innerHTML = anotation.join("");
      cont++;

   }else{
      document.getElementById("alert").innerHTML = `Preencha todos os campos`;
   }
   
}

function formateGrana(valor){
   return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
   
}

