$(document).ready(function () {

   let moedas = [];

   $.ajax({ url: "https://economia.awesomeapi.com.br/json/all" })
      .done((data) => {
         Object.entries(data).forEach((element) => {
            $("#moedas").append(`<option value = "${element[1].code}-${element[1].codein}">${element[0]}</option>`);

         });
         moedas = data;
      });

   $("#moedas").on("change", function () {

      const moeda = $("#moedas").val()
      if (moeda !== "null") {
         $.ajax({ url: `https://economia.awesomeapi.com.br/json/last/${moeda}` })
            .done((data) => {
               $("#cotacao").html(

                  `<table>
                     <tr>
                        <th>Conversão:</th>
                        <td>${Object.values(data)[0].name}</td>
                     </tr>
                     <tr>
                        <th>Data:</th>
                        <td>${Object.values(data)[0].create_date}</td>
                     </tr>
                     <tr>
                        <th>Ultima cotação: </th>
                        <td>${Object.values(data)[0].bid}</td>
                     </tr>
                     <tr>
                        <th>Valor mínimo:</th>
                        <td>${Object.values(data)[0].low}</td>
                     </tr>
                     <tr>
                        <th>Valor máximo:</th>
                        <td>${Object.values(data)[0].high}</td>
                     </tr>
                     <tr>
                        <th>Valor de Fechamento:</th>
                        <td>${Object.values(data)[0].ask}</td>
                     </tr>
                   </table>`

               )
            })

      }

   })

   $("#btn-search").on("click", function () {
      let agora = new Date;
      agora = agora.getFullYear() + "" + String(agora.getMonth() + 1).padStart(2, '0') + "" + String(agora.getDate()).padStart(2, '0');

      const dataInicio = $("#data-inicio").val().replaceAll("-", "");
      const datafim = $("#data-fim").val().replaceAll("-", "");

      const dias = Math.abs(new Date($("#data-fim").val()) - new Date($("#data-inicio").val())) / (1000 * 3600 * 24);
      const moeda = $("#moedas").val();

      $("#tabela").html("");

      if (datafim <= agora && dataInicio <= datafim) {
         $("#tabela").html(
            `<tr>
                <th>Moeda</th>
                <th>Data</th>
                <th>Valor mínimo R$</th>
                <th>Valor máximo R$</th>
                <th>Variação</th>
                <th>Valor de fechamento R$</th>
                
            </tr>`
         );

         console.log(agora);
         console.log(dataInicio);
         console.log(datafim);

         $.ajax({ url: `https://economia.awesomeapi.com.br/${moeda}/200000?start_date=${dataInicio}&end_date=${datafim}` })
            .done((data) => {
               console.log(data);

               data.forEach(function (element) {
                  
                  console.log(1)
                  $("#tabela").append(
                     `<tr>
                           <td>${data[0].code}</td>
                           <td>${new Date(parseInt(element.timestamp, 10) * 1000)}</td>
                           <td>${element.low}</td>
                           <td>${element.high}</td>
                           <td>${element.pctChange}%</td>
                           <td>${element.ask}</td>
                     </tr>`
                  )

               })


            });



      }else{
         alert("Insira uma data correta");
      }


   });

});