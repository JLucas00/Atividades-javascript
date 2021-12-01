const carroPedro={velMin:150, velMax:230, derrapagem:0.03}
const carroEdna={velMin:180, velMax:220, derrapagem:0.01}
const carroJuca={velMin:120, velMax:260, derrapagem:0.05}

const carroPadrao={minVelMin:100, maxVelMin:150, minVelMax:200, maxVelMax:280, derrapagemMin: 0.01, derrapagemMax: 0.08}

function numeroAleatorio(min, max) {
   return Math.random() * (max - min) + min;
 }


function executarNormal(){
   let numVoltas = document.querySelector('input[name="tipo-corrida"]:checked').value;
   numVoltas=parseInt(numVoltas);
   let velPedro=0;
   let velJuca=0;
   let velEdna=0;
   
   let scorePedro=0;
   let scoreEdna=0;
   let scoreJuca=0;

   for(i = 0 ; i < numVoltas ; i++){
      velPedro=numeroAleatorio(carroPedro.velMin, carroPedro.velMax);
      velEdna=numeroAleatorio(carroEdna.velMin, carroEdna.velMax);
      velJuca=numeroAleatorio(carroJuca.velMin, carroJuca.velMax);
      velPedro=velPedro*(1-carroPedro.derrapagem);
      velEdna=velEdna*(1-carroEdna.derrapagem);
      velJuca=velJuca*(1-carroJuca.derrapagem);

      if(velPedro>velEdna && velPedro>velJuca){
         scorePedro+=1;
      }else if(velEdna>velPedro && velEdna>velJuca){
         scoreEdna+=1;
      }else if(velJuca>velEdna && velJuca>velPedro){
         scoreJuca+=1;
      }

      if(i==numVoltas-1){
         if(scorePedro>scoreEdna && scorePedro>scoreJuca){
            if(scoreEdna>scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="3° Lugar";

               document.getElementById("posicao1").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

            }else{
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="3° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";

               document.getElementById("posicao1").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }
         }else if(scoreEdna>scorePedro && scoreEdna>scoreJuca){
            if(scorePedro>scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="2° Lugar";
               document.getElementById("classificacao-edna").innerHTML="1° Lugar";
               document.getElementById("classificacao-juca").innerHTML="3° Lugar";

               document.getElementById("posicao2").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }else{
               document.getElementById("classificacao-pedro").innerHTML="3° Lugar";
               document.getElementById("classificacao-edna").innerHTML="1° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";

               document.getElementById("posicao3").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }
         }else if(scoreJuca>scoreEdna && scoreJuca>scorePedro){
            if(scoreEdna>scorePedro){
               document.getElementById("classificacao-pedro").innerHTML="3° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="1° Lugar";

               document.getElementById("posicao3").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }else{
               document.getElementById("classificacao-pedro").innerHTML="2° Lugar";
               document.getElementById("classificacao-edna").innerHTML="3° Lugar";
               document.getElementById("classificacao-juca").innerHTML="1° Lugar";

               document.getElementById("posicao2").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }
         }else{
            numVoltas+=1;
         }
      }
   }
   document.getElementById("score-pedro").innerHTML= `${scorePedro} Pontos`;
   document.getElementById("score-edna").innerHTML= `${scoreEdna} Pontos`;
   document.getElementById("score-juca").innerHTML= `${scoreJuca} Pontos`;

}
function executarDesafio(){
   let numVoltas = document.getElementById("num-voltas").value;
   numVoltas=parseInt(numVoltas);
   
   let scorePedro=0;
   let scoreEdna=0;
   let scoreJuca=0;

   for(i = 0 ; i < numVoltas ; i++){
      let minVelPedro=numeroAleatorio(carroPadrao.minVelMin, carroPadrao.maxVelMin);
      let maxVelPedro=numeroAleatorio(carroPadrao.minVelMax, carroPadrao.maxVelMax);
      let derrapagemPedro=numeroAleatorio(carroPadrao.derrapagemMin, carroPadrao.derrapagemMax);
      let velPedro=numeroAleatorio(minVelPedro, maxVelPedro);

      let minVelEdna=numeroAleatorio(carroPadrao.minVelMin, carroPadrao.maxVelMin);
      let maxVelEdna=numeroAleatorio(carroPadrao.minVelMax, carroPadrao.maxVelMax);
      let derrapagemEdna=numeroAleatorio(carroPadrao.derrapagemMin, carroPadrao.derrapagemMax);
      let velEdna=numeroAleatorio(minVelEdna, maxVelEdna);

      let minVelJuca=numeroAleatorio(carroPadrao.minVelMin, carroPadrao.maxVelMin);
      let maxVelJuca=numeroAleatorio(carroPadrao.minVelMax, carroPadrao.maxVelMax);
      let derrapagemJuca=numeroAleatorio(carroPadrao.derrapagemMin, carroPadrao.derrapagemMax);
      let velJuca=numeroAleatorio(minVelJuca, maxVelJuca);

      velPedro=velPedro*(1-derrapagemPedro);
      velEdna=velEdna*(1-derrapagemEdna);
      velJuca=velJuca*(1-derrapagemJuca);

      if(velPedro>velEdna && velPedro>velJuca){
         scorePedro+=1;
      }else if(velEdna>velPedro && velEdna>velJuca){
         scoreEdna+=1;
      }else if(velJuca>velEdna && velJuca>velPedro){
         scoreJuca+=1;
      }

      if(i==numVoltas-1){
         if(scorePedro>scoreEdna && scorePedro>scoreJuca){
            if(scoreEdna>scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="3° Lugar";

               document.getElementById("posicao1").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/blue-race-car.svg">`;

            }else{
               document.getElementById("classificacao-pedro").innerHTML="1° Lugar";
               document.getElementById("classificacao-edna").innerHTML="3° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";

               document.getElementById("posicao1").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }
         }else if(scoreEdna>scorePedro && scoreEdna>scoreJuca){
            if(scorePedro>scoreJuca){
               document.getElementById("classificacao-pedro").innerHTML="2° Lugar";
               document.getElementById("classificacao-edna").innerHTML="1° Lugar";
               document.getElementById("classificacao-juca").innerHTML="3° Lugar";

               document.getElementById("posicao2").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }else{
               document.getElementById("classificacao-pedro").innerHTML="3° Lugar";
               document.getElementById("classificacao-edna").innerHTML="1° Lugar";
               document.getElementById("classificacao-juca").innerHTML="2° Lugar";

               document.getElementById("posicao3").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }
         }else if(scoreJuca>scoreEdna && scoreJuca>scorePedro){
            if(scoreEdna>scorePedro){
               document.getElementById("classificacao-pedro").innerHTML="3° Lugar";
               document.getElementById("classificacao-edna").innerHTML="2° Lugar";
               document.getElementById("classificacao-juca").innerHTML="1° Lugar";

               document.getElementById("posicao3").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao2").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }else{
               document.getElementById("classificacao-pedro").innerHTML="2° Lugar";
               document.getElementById("classificacao-edna").innerHTML="3° Lugar";
               document.getElementById("classificacao-juca").innerHTML="1° Lugar";

               document.getElementById("posicao2").innerHTML=`<img src="assets/images/red-race-car.svg">`;
               document.getElementById("posicao3").innerHTML=`<img src="assets/images/yellow-race-car.svg">`;
               document.getElementById("posicao1").innerHTML=`<img src="assets/images/blue-race-car.svg">`;
            }
         }else{
            numVoltas+=1;
         }
      }
   }
   document.getElementById("score-pedro").innerHTML= `${scorePedro} Pontos`;
   document.getElementById("score-edna").innerHTML= `${scoreEdna} Pontos`;
   document.getElementById("score-juca").innerHTML= `${scoreJuca} Pontos`;
}