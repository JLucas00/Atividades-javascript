const carroPopular={modelo: "Carro Popular", minVelMin:110, maxVelMin:130, minVelMax:180, maxVelMax:200, derrapagemMin:0.03, derrapagemMax:0.04}
const carroSport={modelo: "Carro Sport", minVelMin:125, maxVelMin:145, minVelMax:195, maxVelMax:215, derrapagemMin:0.02, derrapagemMax:0.03}
const carroSuperSport={modelo: "Carro Super Sport", minVelMin:140, maxVelMin:160, minVelMax:210, maxVelMax:230, derrapagemMin:0.01, derrapagemMax:(0.0175).toFixed(4)}
const tipoCarro=[];

for (i = 0 ; i < 20 ; i++){
   if (i<12){
      tipoCarro[i]=carroPopular;
   }else if(i<19){
      tipoCarro[i]=carroSport;
   }else{
      tipoCarro[i]=carroSuperSport;
   }
}

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

   for(let i = 0 ; i < numVoltas ; i++){
      let minVelPedro=numeroAleatorio(carroPedro.minVelMin, carroPedro.maxVelMin);
      let maxVelPedro=numeroAleatorio(carroPedro.minVelMax, carroPedro.maxVelMax);
      let derrapagemPedro=numeroAleatorio(carroPedro.derrapagemMin, carroPedro.derrapagemMax);
      let velPedro=numeroAleatorio(minVelPedro, maxVelPedro);

      let minVelEdna=numeroAleatorio(carroEdna.minVelMin, carroEdna.maxVelMin);
      let maxVelEdna=numeroAleatorio(carroEdna.minVelMax, carroEdna.maxVelMax);
      let derrapagemEdna=numeroAleatorio(carroEdna.derrapagemMin, carroEdna.derrapagemMax);
      let velEdna=numeroAleatorio(minVelEdna, maxVelEdna);

      let minVelJuca=numeroAleatorio(carroJuca.minVelMin, carroJuca.maxVelMin);
      let maxVelJuca=numeroAleatorio(carroJuca.minVelMax, carroJuca.maxVelMax);
      let derrapagemJuca=numeroAleatorio(carroJuca.derrapagemMin, carroJuca.derrapagemMax);
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

      document.getElementById("vel1-edna").innerHTML=`Velocidade Mínima = ${carroEdna.minVelMin} Km/h`;
      document.getElementById("vel1-pedro").innerHTML=`Velocidade Mínima = ${carroPedro.minVelMin} Km/h`;
      document.getElementById("vel1-juca").innerHTML=`Velocidade Mínima = ${carroJuca.minVelMin} Km/h`;
      document.getElementById("vel2-edna").innerHTML=`Velocidade Máxima = ${carroEdna.maxVelMax} Km/h`;
      document.getElementById("vel2-pedro").innerHTML=`Velocidade Máxima = ${carroPedro.maxVelMax} Km/h`;
      document.getElementById("vel2-juca").innerHTML=`Velocidade Máxima = ${carroJuca.maxVelMax} Km/h`;

      document.getElementById("derrap-edna").innerHTML=`Derrapagem: ${carroEdna.derrapagemMin*100}% - ${(carroEdna.derrapagemMax*100).toFixed(2)}%`;
      document.getElementById("derrap-pedro").innerHTML=`Derrapagem: ${carroPedro.derrapagemMin*100}% - ${(carroPedro.derrapagemMax*100).toFixed(2)}%`;
      document.getElementById("derrap-juca").innerHTML=`Derrapagem: ${carroJuca.derrapagemMin*100}% - ${(carroJuca.derrapagemMax*100).toFixed(2)}%`;
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