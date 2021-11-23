/* função que preenche o header */
function preencherHeader(){
   document.querySelector("header").style.width="100vw";
   document.querySelector("header").style.height="15vh";
   document.querySelector("header").style.backgroundColor="rgb(210 255 255)";
   document.querySelector("header").style.display="flex";
   document.querySelector("header").style.justifyContent="center";
   document.querySelector("header").style.alignItems="center";
   document.querySelector("header > a > h1").style.fontFamily="Lobster";
   document.querySelector("header > a > h1").innerHTML="LOBO <span>(Canis Lupus)</span>";
   document.querySelector("header > a > h1 > span").fontStyle="italic";
}
preencherHeader();

function preencherSections(){
   let sections=document.querySelectorAll("main > section");
   sections[0].style.width="100vw";
   sections[0].style.height="800px";
   sections[0].style.maxHeight="min-content";
   sections[0].style.display="flex";
   sections[0].style.justifyContent="center";
   sections[0].style.flexWrap="wrap";
   
   document.querySelector("#div-imagem-lobo").style.maxWidth="50vw";
   document.querySelector("#div-imagem-lobo").style.minWidth="300px";
   document.querySelector("#div-imagem-lobo").style.height="100%";
   document.querySelector("#div-imagem-lobo").style.backgroundColor="rgb(200 200 200)";
   document.querySelector("#div-imagem-lobo").style.display="flex";
   document.querySelector("#div-imagem-lobo").style.flex="1";
   document.querySelector("#div-imagem-lobo").style.justifyContent="center";
   document.querySelector("#div-imagem-lobo").style.alignItems="center";
   
   
   document.querySelector("#imagem-lobo").style.width="50%";
   document.querySelector("#imagem-lobo").style.border="10px solid white";


   document.querySelector("#div-descricao-lobo").style.backgroundColor="rgb(230 230 190)";
   document.querySelector("#div-descricao-lobo").style.display="flex";
   document.querySelector("#div-descricao-lobo").style.justifyContent="center";
   document.querySelector("#div-descricao-lobo").style.alignItems="center";
   document.querySelector("#div-descricao-lobo").style.flex="1";
   document.querySelector("#div-descricao-lobo").style.maxWidth="50vw";
   document.querySelector("#div-descricao-lobo").style.minWidth="300px";
   document.querySelector("#div-descricao-lobo").style.padding="50px";
   document.querySelector("#div-descricao-lobo").style.padding="50px";
   document.querySelector("#div-descricao-lobo").innerHTML="<p>O lobo <span>(Canis lupus)</span> é um animal mamífero, pertencente ao filo Chordata, ordem Carnivora e família Canidae, a mesma família do cachorro. O termo lobo é geralmente utilizado para designar a espécie Canis lupus, um lobo que habita o Hemisfério Norte, também conhecido como lobo cinzento.<p/>"
   
   
   

   
   sections[1].style.height="100vh";
   sections[1].style.width="100vw";
   sections[1].style.display="flex";
   sections[1].style.minWidth="100px";
   sections[1].style.backgroundImage="url(assets/images/background-lobo.jpg)";
   sections[1].style.backgroundRepeat="no-repaeat";
   sections[1].style.backgroundSize="cover";
   sections[1].style.backgroundAttachment="fixed";
   





   sections[2].style.height="300px";
   sections[2].style.width="100%";
   sections[2].style.padding="100px";
   document.querySelector("#section2").innerHTML="<p>O lobo, nome utilizado para designar a espécie Canis lupus, é um animal que vive em algumas regiões do Hemisfério Norte, sendo encontrado nos Estados Unidos, Europa, Ásia e Canadá. A sua distribuição já foi muito maior do que a atual. Com o declínio de suas populações, esses animais são encontrados em áreas mais restritas e selvagens, onde praticamente não há ação antrópica. Dentre suas principais características, podemos destacar:<p/> <p>A presença de longos pelos, que variam entre a cor cinza até completamente pretos – em algumas regiões, podem apresentar um tom avermelhado. A parte inferior do focinho e pescoço pode apresentar coloração mais clara. O lobo pode apresentar também listras escuras nas patas.</p>"
}
preencherSections();