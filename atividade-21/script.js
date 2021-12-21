
const min = 1;
const max = 60;
let sorteio=[];
let num;

function numeroAleatorioInteiro(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function analisisRepeat(element, index){
   while(element == num  && index != ((sorteio.length)-1)){
      console.log(num);
      num = numeroAleatorioInteiro(min, max);
      console.log(num);
   }
   sorteio[(sorteio.length)-1]=num;
}
let i=0;
function sortear(callback){

      num = numeroAleatorioInteiro(min, max);
      sorteio.push(num);
      if(i>0){
         sorteio.forEach(analisisRepeat);
      }
      console.log(sorteio); 
      
      if(i == 6){
         clearInterval(intervalo);
         i = 0;
         /* const btn = document.getElementById('btnSort'); */
         btn.disabled = false;
       
      }else{
         document.getElementById("sorteio").innerHTML += `<div>${sorteio[i]}</div>`;
        /*  console.log(sorteio[position]) */
         i++;
      }
      
   callback(sorteio);
}




function draw1(sorteio){
   
   for(i=0;i<6;i++){
      document.getElementById("sorteio").innerHTML += `<div>${sorteio[i]}</div>`;

   }
   
}


let intervalo;
function makesort(){
   position = 0;
   const btn = document.getElementById('btnSort')
   /* btn.disabled = true; */
   let initdraw = document.getElementById("sorteio").innerHTML = ``;
   /* sortear(draw1); */
   intervalo = setInterval(sortear, 1000);

   console.log(sorteio);
   sorteio=[];
}

