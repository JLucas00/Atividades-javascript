const url = "http://localhost:3001";
const log_in = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const requestUser = document.getElementById("requestUser");

log_in.addEventListener("click", login);
requestUser.addEventListener("click", message);

async function login(){

   const login = await fetch(`${url}/session`, {
      method: 'POST',
      body: JSON.stringify({
        username: username.value.trim(),
        password: password.value.trim(),
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

   const loginData =  await login.text();

   document.getElementById("token").value = loginData;
}

async function message(){
   const token = document.getElementById("token").value;
   const message = await fetch(`${url}/message`, {
      method: 'POST',
      body: JSON.stringify({
        token: token
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
   
   const status = message.status;
   if( status === 404){
      document.getElementById("result").innerHTML = `<h3> Você não conseguiu logar <h3>`
   }else{
      const messageText =  await message.text();
      document.getElementById("result").innerHTML = `<h3> Olá ${messageText}, você está logado <h3>`;
   }
   

}