
const frases = [
   "Eu não desperdiçarei giz",
   "Eu não andarei de skate nos corredores",
   "Eu não arrotarei na aula",
   "Eu não instigarei revoluções",
   "Eu não vou desenhar mulheres nuas na sala de aula",
   "Eu não chamarei minha professora de Bolo Quente",
   "Chiclete de alho não é engraçado",
   "Eles estão rindo de mim, e não comigo",
   "Eu não gritarei “Fogo” em uma sala de aula cheia",
   "Eu não irei muito longe com essa atitude",
   "Eu não farei barulhos de pum na sala de aula",
   "Eu não venderei terras da florida",
   "Eu não me esconderei atrás da quinta emenda",
   "Eu não farei nada de mau nunca mais",
   "Eu não vou dormir durante minha educação",
   "Eu não fingirei ter convulsões",
   "Esta punição não é chata e sem sentido",
   "Meu nome não é doutor morte",
   "Eu não prescreverei medicação",
   "Eu não enterrarei o garoto novo",
   "Eu não ensinarei outros a voar",
   "Eu não trarei carneiros para a aula",
   "Um arroto não é uma resposta",
   "Professora não é leprosa",
   "Café não é para crianças",
   "Eu não comerei coisas por dinheiro",
   "A peruca do diretor não é um frisbee"
];

function limpar(){
   document.getElementById("quantidade").value = 0;
   document.getElementById("escrevendo").innerHTML="";
   quadroApagado = 0;
   printFinal = 0;
   document.getElementById("num-apagados").innerHTML= quadroApagado;
   document.getElementById("num-repeticoes").innerHTML= printFinal;
}
function escrever(){
   let quantidade=document.getElementById("quantidade").value;
   quantidade=parseInt(quantidade);
   console.log(quantidade);

   let n = 0;
   let quadroApagado=0;
   let divs= parseInt(quantidade/11);
   let printFinal = 0;
   const indice = Math.round(Math.random()*(frases.length-1));
   const fraseSelecionada=frases[indice];

   if (n==0){
      document.getElementById("escrevendo").innerHTML="";
   }
   while(n < quantidade){
      if(n!=0 && n%11 === 0){
         printFinal=1;
         document.getElementById("escrevendo").innerHTML="";
         quadroApagado+=1;
         document.getElementById("num-apagados").innerHTML= quadroApagado;
         document.getElementById("num-repeticoes").innerHTML= printFinal;
         document.getElementById("escrevendo").innerHTML+= `<p> ${fraseSelecionada} </p>`;
         n+=1
      }else {
         document.getElementById("escrevendo").innerHTML+= `<p> ${fraseSelecionada} </p>`;
         n+=1;
         printFinal+=1;
         document.getElementById("num-repeticoes").innerHTML= printFinal;
         
      }
   }
}
