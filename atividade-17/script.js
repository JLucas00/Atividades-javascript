
/* Declaração do objeto contendo as propriedades dos carros */
const carro={
   carroPopular:{
      modelo: "Carro Popular",
      velMin:{min:110, max:130},
      velMax:{min:180, max:200},
      derrapagem:{min:0.03 , max: 0.04}
      
   },
   carroSport:{
      modelo: "Carro Sport",
      velMin:{min:125, max:145},
      velMax:{min:195, max:215},
      derrapagem:{min:0.02 , max: 0.03}
   },
   carroSuperSport:{
      modelo: "Carro Super Sport", 
      velMin:{min:140, max:160},
      velMax:{min:210, max:230},
      derrapagem:{min:0.01 , max: 0.0175}
   }

}

/* número de jogadores */
const numJogadores = 3;

/* inicialização de um vetor vazio para escolher um carro randommicamente */
const tipoCarro=[];

/* inicialização de um vetor no escopo global com as distribuições de experiencia para cada colocação */
let distXp = [0,0,0]

/* laço responsável por armazenar os tipos de carro de acordo com a porcentagem de sua raridade */
for (i = 0 ; i < 20 ; i++){
   if (i<12){
      tipoCarro[i]=carro.carroPopular;
   }else if(i<19){
      tipoCarro[i]=carro.carroSport;
   }else{
      tipoCarro[i]=carro.carroSuperSport;
   }
}

/* funções de aleatoriedade para números inteiros e decimais */
function numeroAleatorio(min, max) {
   return Math.random() * (max - min) + min;
}
function numeroAleatorioInteiro(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* vetor de objetos contendo a experiencia e o nível de cada jogador para ser usado no foreach */
const jogadores=[
   Pedro={
      nome: "Pedro",
      exp:0,
      lvl:0
   },
   Edna={
      nome:"Edna",
      exp:0,
      lvl:0
   },
   Juca={
      nome: "Juca",
      exp:0,
      lvl:0
   }
]

/* função que vai executar as voltas, contar quantas voltas cada jogador venceu, 
definir randomicamente as velocidades e derrapagens de cada carro durante cada volta, 
e ao final de tudo imprimir na página os resultados de quem venceu a corrida e quantas voltas cada jogador ganhou */
function numExecutar(numVoltas){
   let scorePedro=0;
   let scoreEdna=0;
   let scoreJuca=0;

   const carroPedro=tipoCarro[numeroAleatorioInteiro(0, tipoCarro.length-1)];
   const carroEdna=tipoCarro[numeroAleatorioInteiro(0, tipoCarro.length-1)];
   const carroJuca=tipoCarro[numeroAleatorioInteiro(0, tipoCarro.length-1)];
   


   for(let i = 0 ; i < numVoltas ; i++){

      /* Escolha aleatória das velocidades e derrapagens de cada carro a cada volta */

      let minVelPedro=(1+0.01*Pedro.lvl)*numeroAleatorio(carroPedro.velMin.min, carroPedro.velMin.max);
      let maxVelPedro=(1+0.01*Pedro.lvl)*numeroAleatorio(carroPedro.velMax.min, carroPedro.velMax.max);
      let derrapagemPedro=numeroAleatorio(carroPedro.derrapagem.min, carroPedro.derrapagem.max);
      let velPedro=numeroAleatorio(minVelPedro, maxVelPedro);

      let minVelEdna=(1+0.01*Edna.lvl)*numeroAleatorio(carroEdna.velMin.min, carroEdna.velMin.max);
      let maxVelEdna=(1+0.01*Edna.lvl)*numeroAleatorio(carroEdna.velMax.min, carroEdna.velMax.max);
      let derrapagemEdna=numeroAleatorio(carroEdna.derrapagem.min, carroEdna.derrapagem.max);
      let velEdna=numeroAleatorio(minVelEdna, maxVelEdna);

      let minVelJuca=(1+0.01*Juca.lvl)*numeroAleatorio(carroJuca.velMin.min, carroJuca.velMin.max);
      let maxVelJuca=(1+0.01*Juca.lvl)*numeroAleatorio(carroJuca.velMax.max, carroJuca.velMax.max);
      let derrapagemJuca=numeroAleatorio(carroJuca.derrapagem.min, carroJuca.derrapagem.max);
      let velJuca=numeroAleatorio(minVelJuca, maxVelJuca);

      velPedro=velPedro*(1-derrapagemPedro);
      velEdna=velEdna*(1-derrapagemEdna);
      velJuca=velJuca*(1-derrapagemJuca);

      
      /* verificação de quem venceu cada volta */
      if(velPedro>velEdna && velPedro>velJuca){
         scorePedro+=1;
      }else if(velEdna>velPedro && velEdna>velJuca){
         scoreEdna+=1;
      }else if(velJuca>velEdna && velJuca>velPedro){
         scoreJuca+=1;
      }

      /* verifica a contagem de pontos na ultima volta definindo um vencedor e imprimindo na página o resultado */
      if(i==numVoltas-1){
         if(scorePedro>scoreEdna && scorePedro>scoreJuca){

            if(scoreEdna>scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="3° Lugar";
      
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
      
               Pedro.exp += distXp[0];
               Edna.exp += distXp[1];
               Juca.exp += distXp[2];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
               
            }else if(scoreEdna<scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="3° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";
      
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[0];
               Edna.exp += distXp[2];
               Juca.exp += distXp[1];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            }else{
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";
      
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[0];
               Edna.exp += distXp[1];
               Juca.exp += distXp[1];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            }
         }else if(scoreEdna>scorePedro && scoreEdna>scoreJuca){
            if(scorePedro>scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="2° Lugar";
               document.getElementById("classificacao-edna").innerHTML="1° Lugar";
               document.getElementById("classificacao-juca").innerHTML="3° Lugar";
      
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[1];
               Edna.exp += distXp[0];
               Juca.exp += distXp[2];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            }else if(scorePedro<scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="3° Lugar";
               document.getElementById("classificacao-edna").innerHTML="1° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";
      
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[2];
               Edna.exp += distXp[0];
               Juca.exp += distXp[1];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            } else{
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";
      
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[1];
               Edna.exp += distXp[0];
               Juca.exp += distXp[1];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            }
         }else if(scoreJuca>scoreEdna && scoreJuca>scorePedro){
            if(scoreEdna>scorePedro){
               document.getElementById("classificacao-pedro").innerHTML="3° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="1° Lugar";
      
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[2];
               Edna.exp += distXp[1];
               Juca.exp += distXp[0];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            }else if(scoreEdna<scorePedro){
               document.getElementById("classificacao-pedro").innerHTML="2° Lugar";
               document.getElementById("classificacao-edna").innerHTML="3° Lugar";
               document.getElementById("classificacao-juca").innerHTML="1° Lugar";
      
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[1];
               Edna.exp += distXp[2];
               Juca.exp += distXp[0];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            } else{
               document.getElementById("classificacao-pedro").innerHTML="2° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="1° Lugar";
      
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

               Pedro.exp += distXp[1];
               Edna.exp += distXp[1];
               Juca.exp += distXp[0];

               document.getElementById("exp-pedro").innerHTML= `EXP: ${Pedro.exp} pts`;
               document.getElementById("exp-edna").innerHTML= `EXP: ${Edna.exp} pts`;
               document.getElementById("exp-juca").innerHTML= `EXP: ${Juca.exp} pts`;
            }
         }else{
            /* caso não entre em nenhuma das condições acima, quer dizer que ouve empate na primeira colocação,
             então os carrinhos irão dar mais uma volta e enquanto o primeiro colocado continuar empatando irão continuar correndo*/
            numVoltas+=1;
         }

         /* usando o forEach para subir os níveis dos jogadores de acordo com sua pontuação de experiência */
         jogadores.forEach(nivelUpdate);

         /* imprimindo o nível de cada jogador na página */
         document.getElementById("lvl-pedro").innerHTML= `Lvl ${Pedro.lvl}`;
         document.getElementById("lvl-edna").innerHTML= `Lvl ${Edna.lvl}`;
         document.getElementById("lvl-juca").innerHTML= `Lvl ${Juca.lvl}`;

      }
   }

   /* imprime as informações dos carros e de quantas voltas cada um ganhou */
   document.getElementById("score-pedro").innerHTML= `Ganhou ${scorePedro} Voltas`;
   document.getElementById("score-edna").innerHTML= `Ganhou ${scoreEdna} Voltas`;
   document.getElementById("score-juca").innerHTML= `Ganhou ${scoreJuca} Voltas`;

   document.getElementById("carro-edna").innerHTML=`${carroEdna.modelo}`;
   document.getElementById("carro-pedro").innerHTML=`${carroPedro.modelo}`;
   document.getElementById("carro-juca").innerHTML=`${carroJuca.modelo}`;

   document.getElementById("vel1-edna").innerHTML=`Velocidade Mínima = ${carroEdna.velMin.min} Km/h`;
   document.getElementById("vel1-pedro").innerHTML=`Velocidade Mínima = ${carroPedro.velMin.min} Km/h`;
   document.getElementById("vel1-juca").innerHTML=`Velocidade Mínima = ${carroJuca.velMin.min} Km/h`;
   document.getElementById("vel2-edna").innerHTML=`Velocidade Máxima = ${carroEdna.velMax.max} Km/h`;
   document.getElementById("vel2-pedro").innerHTML=`Velocidade Máxima = ${carroPedro.velMax.max} Km/h`;
   document.getElementById("vel2-juca").innerHTML=`Velocidade Máxima = ${carroJuca.velMax.max} Km/h`;

   document.getElementById("derrap-edna").innerHTML=`Derrapagem: ${carroEdna.derrapagem.min*100}% - ${(carroEdna.derrapagem.max*100).toFixed(2)}%`;
   document.getElementById("derrap-pedro").innerHTML=`Derrapagem: ${carroPedro.derrapagem.min*100}% - ${(carroPedro.derrapagem.max*100).toFixed(2)}%`;
   document.getElementById("derrap-juca").innerHTML=`Derrapagem: ${carroJuca.derrapagem.min*100}% - ${(carroJuca.derrapagem.max*100).toFixed(2)}%`;
}

/* função que é executada ao clicar no botão para iniciar a corrida */
function executarNormal(){
   let numVoltas = document.querySelector('input[name="tipo-corrida"]:checked').value;
   numVoltas=parseInt(numVoltas,10);

   /* verificação do modo de corrida para saber como serão as distribuições de pontos para cada colocação */
   if(document.querySelector('input[name="tipo-corrida"]:checked').id == "corrida-rapida"){
      distXp = [200,120,50];
   }else if(document.querySelector('input[name="tipo-corrida"]:checked').id == "grande-premio"){
      distXp = [220,130,75];
   }else{
      distXp = [250,150,90];
   }

   /* execução da função responsável por verificar os vencedores */
   numExecutar(numVoltas);
}

/* função que calcula o nível dos jogadores de acordo com sua experiência, usada no forEach */
function nivelUpdate(element, index, array){

   jogadores[index].lvl = parseInt(jogadores[index].exp/450);
   if(jogadores[index].lvl > 9){
      jogadores[index].lvl = 10;
   }
}

