
/* função que apresenta as respostas em outro bloco */
function escreverNoBloco(){
   const name=document.getElementById("usuario").value;
   const comment=document.getElementById("coment").value;

   document.getElementById("respostas").setAttribute("class", "respostas");
   document.getElementById("titulo-resposta").innerHTML="É hora do Dududududuelo!!!";
   document.getElementById("nome-resposta").innerHTML="Nome:  " + name;
   
   document.getElementById("comentarios-resposta").innerHTML="Comentários:  " + comment;
   
}

let selecao=1;
function hoverAvaliacao(elemento){
   let itensAvaliacao=elemento.id;
   let num=parseInt(itensAvaliacao, 10);
   selecao=num;
   for(let i=1 ; i<=num ; i++){
      let j="" + i;
      document.getElementById(j).style.filter="saturate(200%)";
   }
   for(let i=1+num ; i<=5 ; i++ ){
      let j="" + i;
      document.getElementById(j).style.filter="saturate(50%)";
   }
}
function hoverAvaliacao2(elemento){
   let itensAvaliacao=elemento.id;
   let num=parseInt(itensAvaliacao, 10);
   for(let i=1 ; i<=num ; i++){
      let j="" + i;
      document.getElementById(j).style.filter="saturate(200%)";
   }
   for(let i=1+num ; i<=5 ; i++ ){
      let j="" + i;
      document.getElementById(j).style.filter="saturate(50%)";
   }
}

function removeHover(elemento){
   hoverAvaliacao2(document.getElementById("" + selecao))
}