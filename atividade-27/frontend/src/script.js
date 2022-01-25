const url = "http://localhost:3001";


function enviarDados(){
   const nome = document.getElementById("nome").value;
   const data = document.getElementById("data").value;
   const email = document.getElementById("email").value;
   const ramal = document.getElementById("ramal").value;
   const setor = document.getElementById("setor").value;

   fetch(`${url}/funcionarios/database`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         nome: nome,
         data: data,
         email: email,
         ramal: ramal,
         setor: setor
      })
   })
      .then(
         function (response) {
            if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
               return;
            }

            // Examine the text in the response
            response.json().then(function (data) {

               console.log(data);
            });
         }
      )
      .catch(function (err) {
         console.log('Fetch Error :-S', err);
      });

}

function aplicacaoAniversariantes() {

   const mes = document.getElementById("mes-aniversariantes").value;

   fetch(`${url}/funcionarios/aniversariantes?mes=${mes}`)
      .then(
         function (response) {
            if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
               return;
            }

            // Examine the text in the response
            response.json().then(function (data) {


               document.getElementById("resultado").innerHTML = ``;
               document.getElementById("resultado").innerHTML = `<tr> <th>Nome</th></tr>`;
               data.forEach(element => {
                  document.getElementById("resultado").innerHTML += `<tr> <td>${element}</td> </tr>`;
               });

               console.log(data);
            });
         }
      )
      .catch(function (err) {
         console.log('Fetch Error :-S', err);
      });

}



function aplicacaoSetor() {

   const setor = document.getElementById("pesquisaSetor").value;

   console.log(setor);

   fetch(`${url}/funcionarios/setor?setor=${setor}`)
      .then(
         function (response) {
            if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
               return;
            }

            // Examine the text in the response
            response.json().then(function (data) {

               document.getElementById("resultado").innerHTML = ``;
               document.getElementById("resultado").innerHTML = `<tr> <th>Nome</th></tr>`;
               data.forEach(element => {
                  document.getElementById("resultado").innerHTML += `<tr> <td>${element}</td> </tr>`;
               });

               console.log(data);
            });
         }
      )
      .catch(function (err) {
         console.log('Fetch Error :-S', err);
      });
}

function aplicacaoRamal() {

   fetch(`${url}/funcionarios/ramal`)
      .then(
         function (response) {
            if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
               return;
            }

            // Examine the text in the response
            response.json().then(function (data) {
            
               document.getElementById("resultado").innerHTML = ``;
               document.getElementById("resultado").innerHTML = `<tr> <th>Nome</th> <th>Ramal</th></tr>`;
               data.forEach(element => {
                  document.getElementById("resultado").innerHTML += `<tr> <td>${element.name}</td> <td>${element.extension}</td> </tr>`;
               });

               
            });
         }
      )
      .catch(function (err) {
         console.log('Fetch Error :-S', err);
      });

}

function start() {

   fetch(`${url}/start`)
      .then(
         function (response) {
            if (response.status !== 200) {
               console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
               return;
            }

            // Examine the text in the response
            response.json().then(function (data) {


               data.forEach(element => {
                  document.getElementById("pesquisaSetor").innerHTML += `<option value="${element}">${element}</option>`
                  document.getElementById("setor").innerHTML += `<option value="${element}">${element}</option>`
               })
               
            });
         }
      )
      .catch(function (err) {
         console.log('Fetch Error :-S', err);
      });

}
start();
