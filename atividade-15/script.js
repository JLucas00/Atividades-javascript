let game = [
   ["v", "v", "v"],
   ["v", "v", "v"],
   ["v", "v", "v"]
]
const tam = 3;

let countClick = 0;

function executar(id) {

   if (countClick % 2 != 0) {
      console.log(id)
      switch (id) {
         case "00":
            if (game[0][0] == "v") {
               game[0][0] = "x";
               document.getElementById(id).innerHTML = "<img src='assets/x-svg-white.svg'/>";
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
            case "10":
            if (game[1][0] == "v") {
               game[1][0] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
         case "20":
            if (game[2][0] == "v") {
               game[2][0] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
         case "01":
            if (game[0][1] == "v") {
               game[0][1] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
         case "11":
            if (game[1][1] == "v") {
               game[1][1] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
         case "21":
            if (game[2][1] == "v") {
               game[2][1] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
         case "02":
            if (game[0][2] == "v") {
               game[0][2] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
         case "12":
            if (game[1][2] == "v") {
               game[1][2] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
         case "22":
            if (game[2][2] == "v") {
               game[2][2] = "x";
               document.getElementById(id).innerHTML = `<img src="assets/x-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/circle-svg-white.svg");
               countClick += 1;
            }
            break;
      }
   } else {
      console.log(id)
      switch (id) {
         case "00":
            if (game[0][0] == "v") {
               game[0][0] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "10":
            if (game[1][0] == "v") {
               game[1][0] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "20":
            if (game[2][0] == "v") {
               game[2][0] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "01":
            if (game[0][1] == "v") {
               game[0][1] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "11":
            if (game[1][1] == "v") {
               game[1][1] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "21":
            if (game[2][1] == "v") {
               game[2][1] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "02":
            if (game[0][2] == "v") {
               game[0][2] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "12":
            if (game[1][2] == "v") {
               game[1][2] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
         case "22":
            if (game[2][2] == "v") {
               game[2][2] = "o";
               document.getElementById(id).innerHTML = `<img src="assets/circle-svg-white.svg"/>`;
               document.getElementById("img-vez-jogo").setAttribute("src", "assets/x-svg-white.svg");
               countClick += 1;
            }
            break;
      }

   }

   if (countClick >= 5) {
      /* Verificação das condições de vitória do x */
      if (game[0][0] == "x" && game[1][1] == "x" && game[2][2] == "x") {
         document.getElementById("00").style.backgroundColor = "red";
         document.getElementById("11").style.backgroundColor = "red";
         document.getElementById("22").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else if (game[0][2] == "x" && game[1][1] == "x" && game[2][0] == "x") {
         document.getElementById("02").style.backgroundColor = "red";
         document.getElementById("11").style.backgroundColor = "red";
         document.getElementById("20").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else if (game[0][0] == "x" && game[0][1] == "x" && game[0][2] == "x") {
         document.getElementById("00").style.backgroundColor = "red";
         document.getElementById("01").style.backgroundColor = "red";
         document.getElementById("02").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else if (game[1][0] == "x" && game[1][1] == "x" && game[1][2] == "x") {
         document.getElementById("10").style.backgroundColor = "red";
         document.getElementById("11").style.backgroundColor = "red";
         document.getElementById("12").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else if (game[2][0] == "x" && game[2][1] == "x" && game[2][2] == "x") {
         document.getElementById("20").style.backgroundColor = "red";
         document.getElementById("21").style.backgroundColor = "red";
         document.getElementById("22").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else if (game[0][0] == "x" && game[1][0] == "x" && game[2][0] == "x") {
         document.getElementById("00").style.backgroundColor = "red";
         document.getElementById("10").style.backgroundColor = "red";
         document.getElementById("20").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else if (game[0][1] == "x" && game[1][1] == "x" && game[2][1] == "x") {
         document.getElementById("01").style.backgroundColor = "red";
         document.getElementById("11").style.backgroundColor = "red";
         document.getElementById("21").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else if (game[0][2] == "x" && game[1][2] == "x" && game[2][2] == "x") {
         document.getElementById("02").style.backgroundColor = "red";
         document.getElementById("12").style.backgroundColor = "red";
         document.getElementById("22").style.backgroundColor = "red";
         document.getElementById("resultado").innerHTML = `<img src="assets/x-svg-white.svg"/> É o vencedor`;

      } else {

         /* Verificação das condições de vitória do circulo */
         if (game[0][0] == "o" && game[1][1] == "o" && game[2][2] == "o") {
            document.getElementById("00").style.backgroundColor = "red";
            document.getElementById("11").style.backgroundColor = "red";
            document.getElementById("22").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else if (game[0][2] == "o" && game[1][1] == "o" && game[2][0] == "o") {
            document.getElementById("02").style.backgroundColor = "red";
            document.getElementById("11").style.backgroundColor = "red";
            document.getElementById("20").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else if (game[0][0] == "o" && game[0][1] == "o" && game[0][2] == "o") {
            document.getElementById("00").style.backgroundColor = "red";
            document.getElementById("01").style.backgroundColor = "red";
            document.getElementById("02").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else if (game[1][0] == "o" && game[1][1] == "o" && game[1][2] == "o") {
            document.getElementById("10").style.backgroundColor = "red";
            document.getElementById("11").style.backgroundColor = "red";
            document.getElementById("12").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else if (game[2][0] == "o" && game[2][1] == "o" && game[2][2] == "o") {
            document.getElementById("20").style.backgroundColor = "red";
            document.getElementById("21").style.backgroundColor = "red";
            document.getElementById("22").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else if (game[0][0] == "o" && game[1][0] == "o" && game[2][0] == "o") {
            document.getElementById("00").style.backgroundColor = "red";
            document.getElementById("10").style.backgroundColor = "red";
            document.getElementById("20").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else if (game[0][1] == "o" && game[1][1] == "o" && game[2][1] == "o") {
            document.getElementById("01").style.backgroundColor = "red";
            document.getElementById("11").style.backgroundColor = "red";
            document.getElementById("21").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else if (game[0][2] == "o" && game[1][2] == "o" && game[2][2] == "o") {
            document.getElementById("02").style.backgroundColor = "red";
            document.getElementById("12").style.backgroundColor = "red";
            document.getElementById("22").style.backgroundColor = "red";
            document.getElementById("resultado").innerHTML = `<img src="assets/circle-svg-white.svg"/> É o vencedor`;

         } else {
            document.getElementById("resultado").innerHTML = `Empate`;

         }
      }


   }

}
executar();

function limpar() {
   game = [
      ["v", "v", "v"],
      ["v", "v", "v"],
      ["v", "v", "v"]
   ]
   countClick = 0;

   document.getElementById("00").style.backgroundColor = "";
   document.getElementById("01").style.backgroundColor = "";
   document.getElementById("02").style.backgroundColor = "";
   document.getElementById("10").style.backgroundColor = "";
   document.getElementById("20").style.backgroundColor = "";
   document.getElementById("11").style.backgroundColor = "";
   document.getElementById("22").style.backgroundColor = "";
   document.getElementById("12").style.backgroundColor = "";
   document.getElementById("21").style.backgroundColor = "";


   document.getElementById("00").innerHTML = "";
   document.getElementById("01").innerHTML = "";
   document.getElementById("02").innerHTML = "";
   document.getElementById("10").innerHTML = "";
   document.getElementById("20").innerHTML = "";
   document.getElementById("11").innerHTML = "";
   document.getElementById("22").innerHTML = "";
   document.getElementById("12").innerHTML = "";
   document.getElementById("21").innerHTML = "";

   document.getElementById("resultado").innerHTML = ""

}
executar();