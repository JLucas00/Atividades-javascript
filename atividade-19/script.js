let cont=0;
let memory = [];

let client = {};
function calculate(){

   if(document.getElementById("name").value != "" && document.getElementById("date").value != "" && document.getElementById("debt").value != ""){
      
      document.getElementById("alert").innerHTML = ``;
      client = {
         cname : document.getElementById("name").value,
         duedate : document.getElementById("date").value,
         debt : Number(document.getElementById("debt").value),
         delay: 0,
         juros : 0,
         valor : 0
      }
      memory.push(client);
 
      duedate = new Date(client.duedate);
      let present_date = new Date();
      let dateFormated = ((present_date.getDate() )) + "/" + ((present_date.getMonth() + 1)) + "/" + present_date.getFullYear();
      let duedateFormated = ((duedate.getDate() )) + "/" + ((duedate.getMonth() + 1)) + "/" + duedate.getFullYear();
      
      let duedateFormated2 = ((duedate.getDate()+1 )) + "/" + ((duedate.getMonth() + 1)) + "/" + duedate.getFullYear();
      
      let diference = present_date.getTime() - duedate.getTime();
      diference = parseInt(diference/(1000*3600*24), 10);
      
      
      if (diference > 0){
         client.delay = diference;
         client.juros = 0.02+0.001*client.delay;
         client.valor = client.debt + client.juros*client.debt;
      }else{
         client.juros = 0;
         client.delay = "Dentro do prazo";
         client.valor = client.debt;
      }
      

      let anotation = memory.map(function(item, cont){
         return `<tr>
                     <td>${item.cname}</td>
                     <td>${item.duedate}</td>
                     <td>${formateGrana(item.debt)}</td>
                     <td>${item.delay}</td>
                     <td>${((item.juros)*100).toFixed(1)} % </td>
                     <td>${formateGrana(item.valor)}</td>
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

function clean(){
   cont=0;
   memory = [];
   client = {};
   document.getElementById("tabela").innerHTML=
   `<tr>
      <th>Nome do Cliente</th>
      <th>Data de Vencimento</th>
      <th>Valor da Compra</th>
      <th>Atraso (dias)</th>
      <th>Juros</th>
      <th>Valor com Juros</th>
   </tr>`;
}

function escreveOrdened(element){
   return `<tr>
                  <td>${element.cname}</td>
                  <td>${element.duedate}</td>
                  <td>${formateGrana(element.debt)}</td>
                  <td>${element.delay}</td>
                  <td>${((element.juros)*100).toFixed(1)} % </td>
                  <td>${formateGrana(element.valor)}</td>
             </tr>`;
}

function somagrupo(total, num){
   return total+num.valor;
}

function agruparNome(){
   let objectName = agruparPor(memory,"cname");
   arrayName = Object.values(objectName);
   let anotation = [];

   arrayName.forEach(function(item, index){
      item.forEach((element)=>{
         anotation.push(escreveOrdened(element));
      });
      let soma = item.reduce(somagrupo, 0);

      anotation.push(
         `<tr>
            <th>Total</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>${formateGrana(soma)}</th>
         </tr>`);
   });
   anotation.unshift(
      `<h2>Agrupamento por nome</h2>
      <tr>
         <th>Nome do Cliente</th>
         <th>Data de Vencimento</th>
         <th>Valor da Compra</th>
         <th>Atraso (dias)</th>
         <th>Juros</th>
         <th>Valor com Juros</th>
      </tr>`)
   document.getElementById("tabela").innerHTML = anotation.join("");
   
}
function agruparData(){
   let objectData = agruparPor(memory, "duedate");
   arrayData = Object.values(objectData);
   let soma=0;
   let anotation = [];

   arrayData.forEach(function(item, index){
      item.forEach((element)=>{
         anotation.push(escreveOrdened(element));
      }); 
      let soma = item.reduce(somagrupo, 0);

      anotation.push(
         `<tr>
            <th>Total</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th>${formateGrana(soma)}</th>
         </tr>`);
   });
   anotation.unshift(
      `<h2>Agrupamento por data</h2>
      <tr>
         <th>Nome do Cliente</th>
         <th>Data de Vencimento</th>
         <th>Valor da Compra</th>
         <th>Atraso (dias)</th>
         <th>Juros</th>
         <th>Valor com Juros</th>
      </tr>`)
   document.getElementById("tabela").innerHTML = anotation.join("");
}

function agruparPor(objetoArray, propriedade) {
   return objetoArray.reduce(function (acc, obj) {
     let key = obj[propriedade];
     if (!acc[key]) {
       acc[key] = [];
     }
     acc[key].push(obj);
     return acc;
   }, {});
}