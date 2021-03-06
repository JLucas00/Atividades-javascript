$(document).ready(function(){

   $("#resultado").hide();

   $("#btn-send").on("click", function(){

      const validacep = /^\d{8}$/
      const CEP = $("#CEP").val();
      let dados = {};

      if(validacep.test(CEP)){

            $.ajax({ url: `https://cep.awesomeapi.com.br/json/${CEP}` })
         .done((data) => {
            $("#resultado").show();
            $("#resultado").append(
               `<table>
                  <tr>
                     <th>Estado</th>
                     <td>${data.state}</td>
                  </tr>
                  <tr>
                     <th>Cidade</th>
                     <td>${data.city}</td>
                  </tr>
                  <tr>
                     <th>Bairro</th>
                     <td>${data.district}</td>
                  </tr>
                  <tr>
                     <th>Rua</th>
                     <td>${data.address}</td>
                  </tr>
               </table>`
            )
            dados = data;
            console.log(dados.lat);
            console.log(dados.lng);

            $("#mapa").html(`<iframe src="https://www.google.com/maps?api=1&q=${dados.lat}%2C${dados.lng}&hl=es;zoom=14&output=embed" width="700" height="400"></iframe>`)
            
         });


      }else{

         $("#resultado").html("");
         $("#resultado").hide();
         $("#mapa").html("");
         alert("INSIRA O CEP CORRETO");

      }

      

      

   })
})