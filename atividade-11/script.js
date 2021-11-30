let contPedido=0;

function resultado(){
   
   /* variáveis para armazenar o valor dos produtos selecionados */
   const pao = document.querySelector('input[name="tipo-pao"]:checked').value;
   const hamburguer = document.querySelector('input[name="tipo-hamburguer"]:checked').value;
   const salada = document.querySelector('input[name="tipo-salada"]:checked').value;
   const queijo = document.querySelector('input[name="tipo-queijo"]:checked').value;
   
   /* variáveis para armazenar os IDs dos produtos selecionados */
   const idPao = document.querySelector('input[name="tipo-pao"]:checked').id;
   const idHamburguer = document.querySelector('input[name="tipo-hamburguer"]:checked').id;
   const idSalada = document.querySelector('input[name="tipo-salada"]:checked').id;
   const idQueijo = document.querySelector('input[name="tipo-queijo"]:checked').id;
   
   /* variáveis para armazenar strigs vazias e em seguida */
   let listPao="";
   let listHamburguer="";
   let listSalada="";
   let listQueijo="";
   
   
   /* soma */
   let valor=parseFloat(pao) + parseFloat(hamburguer) + parseFloat(salada) + parseFloat(queijo);
   
   if(idPao=="pao-frances"){
      listPao="<li>Pão Francês</li>";
   }else if(idPao=="pao-australiano"){
      listPao="<li>Pão Australiano</li>";
   }else{
      listPao="<li>Pão Brioche</li>";
   }


   if(idHamburguer=="picanha"){
      listHamburguer="<li>Picanha</li>";
   }else if(idHamburguer=="costela"){
      listHamburguer="<li>Costela</li>";
   }else{
      listHamburguer="<li>Vegano</li>";
   }


   if(idSalada=="alface"){
      listSalada="<li>Alface</li>";
   }else if(idSalada=="tomate"){
      listSalada="<li>Tomate</li>";
   }else{
      listSalada="<li>Sem Salada</li>";
   }


   if(idQueijo=="mussarela"){
      listQueijo="<li>Queijo Mussarela</li>";
   }else if(idQueijo=="prato"){
      listQueijo="<li>Queijo Prato</li>";
   }else{
      listQueijo="<li>Queijo Cheddar</li>";
   }


   contPedido+=1;
   document.getElementById("anotacao").innerHTML+=`<h3>PEDIDO: # ${contPedido}</h3>`; 
   document.getElementById("anotacao").innerHTML+=listPao;
   document.getElementById("anotacao").innerHTML+=listHamburguer;
   document.getElementById("anotacao").innerHTML+=listSalada;
   document.getElementById("anotacao").innerHTML+=listQueijo;
   document.getElementById("anotacao").innerHTML+="................................................";
   document.getElementById("anotacao").innerHTML+=`<h3>TOTAL R$ ${valor}</h3>`;
   document.getElementById("anotacao").innerHTML+="................................................</br></br>";
}