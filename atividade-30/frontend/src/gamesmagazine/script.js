$(document).ready(function(){

   $("#btn-send").on("click", function(){

      const nome = $("#nome-jogo").val();
      const ano = $("#ano").val();
      const genero = $("#genero").val();
      const multiplayer = $(`input[name="multiplayer"]:checked`).val();
      const offline = $(`input[name="offline"]:checked`).val();
      const crossplataform = $(`input[name="crossplataform"]:checked`).val();

      console.log(offline);
   
      console.log(multiplayer);
      console.log(crossplataform);

      /* fetch(`${url}/calculadora`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            
         })
      })
         .then(
            function (response) {
               if (response.status !== 200) {
                  console.log('Looks like there was a problem. Status Code: ' + response.status);
                  return;
               }
      
               // Examine the text in the response
               response.json().then(function (data) {
                  return data;
               });
            }
         )
         .catch(function (err) {
            console.log('Fetch Error :-S', err);
         }); */

   })
})