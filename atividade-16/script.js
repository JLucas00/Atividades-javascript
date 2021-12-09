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


const tipoCarro=[];

for (i = 0 ; i < 20 ; i++){
   if (i<12){
      tipoCarro[i]=carro.carroPopular;
   }else if(i<19){
      tipoCarro[i]=carro.carroSport;
   }else{
      tipoCarro[i]=carro.carroSuperSport;
   }
}
console.log(tipoCarro)
function numeroAleatorio(min, max) {
   return Math.random() * (max - min) + min;
}
function numeroAleatorioInteiro(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numExecutar(numVoltas){
   let scorePedro=0;
   let scoreEdna=0;
   let scoreJuca=0;

   const carroPedro=tipoCarro[numeroAleatorioInteiro(0, tipoCarro.length-1)];
   const carroEdna=tipoCarro[numeroAleatorioInteiro(0, tipoCarro.length-1)];
   const carroJuca=tipoCarro[numeroAleatorioInteiro(0, tipoCarro.length-1)];
   console.log(carroPedro.velMin.min)

   for(let i = 0 ; i < numVoltas ; i++){

      let minVelPedro=numeroAleatorio(carroPedro.velMin.min, carroPedro.velMin.max);
      let maxVelPedro=numeroAleatorio(carroPedro.velMax.min, carroPedro.velMax.max);
      let derrapagemPedro=numeroAleatorio(carroPedro.derrapagem.min, carroPedro.derrapagem.max);
      let velPedro=numeroAleatorio(minVelPedro, maxVelPedro);

      let minVelEdna=numeroAleatorio(carroEdna.velMin.min, carroEdna.velMin.max);
      let maxVelEdna=numeroAleatorio(carroEdna.velMax.min, carroEdna.velMax.max);
      let derrapagemEdna=numeroAleatorio(carroEdna.derrapagem.min, carroEdna.derrapagem.max);
      let velEdna=numeroAleatorio(minVelEdna, maxVelEdna);

      let minVelJuca=numeroAleatorio(carroJuca.velMin.min, carroJuca.velMin.max);
      let maxVelJuca=numeroAleatorio(carroJuca.velMax.max, carroJuca.velMax.max);
      let derrapagemJuca=numeroAleatorio(carroJuca.derrapagem.min, carroJuca.derrapagem.max);
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
function executarNormal(){
   let numVoltas = document.querySelector('input[name="tipo-corrida"]:checked').value;
   numVoltas=parseInt(numVoltas,10);

   numExecutar(numVoltas);
}
function executarDesafio(){
   let numVoltas = document.getElementById("num-voltas").value;
   numVoltas=parseInt(numVoltas,10);
   
   numExecutar(numVoltas);
}