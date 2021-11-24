
/* função que apresenta as respostas em outro bloco */
function escreverNoBloco(){
   const name=document.getElementById("usuario").value;
   const comment=document.getElementById("coment").value;

   document.getElementById("respostas").setAttribute("class", "respostas");
   document.getElementById("titulo-resposta").innerHTML="É hora do Dududududuelo!!!";
   document.getElementById("nome-resposta").innerHTML="Nome:  " + name;
   
   document.getElementById("comentarios-resposta").innerHTML="Comentários:  " + comment;
   
}


function hoverAvaliacao(num){
   let itensAvaliacao=document.getElementById(this).id;
   let num=parseInt(itensAvaliacao);
   for(i=0 ; i<num ; i++){
      let item=i;
      document.getElementById("nome-resposta").innerHTML= "avaliação:" + i + "estrelas";
      console.log(item);
      document.getElementById(i).style.filter="saturate(200%)";
      console.log(num);
   }
}
