const url = "http://localhost:3001";
const log_in = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const requestUser = document.getElementById("requestUser");

log_in.addEventListener("click", login);
requestUser.addEventListener("click", message);

async function login(){

   const login = await fetch(`${url}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username: username.value.trim(),
        password: password.value.trim(),
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': true,
      }, 
      credentials: 'include'
    })

   const loginData =  await login.text();

}

async function message(){
   
   const message = await fetch(`${url}/message`, {
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Credentials': true,
    }, 
    credentials: 'include'
   })
   
   const status = message.status;
   if( status === 404){
      document.getElementById("result").innerHTML = `<h3> Você não conseguiu logar <h3>`
   }else{
      const messageText =  await message.text();
      document.getElementById("result").innerHTML = `<h3> Olá ${messageText}, você está logado <h3>`;
   }
   

}