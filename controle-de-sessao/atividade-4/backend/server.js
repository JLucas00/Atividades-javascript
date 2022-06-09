const cors = require("cors");
const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = 3001;
const fs = require('fs');
const users = require("./users.json")
const bcrypt = require('bcrypt');

const cryptografia = require("./criptografia/crypto");

const cookieParser = require('cookie-parser');
server.use(cors({origin: ["http://localhost:8080"], credentials: true}));
server.use(express());
server.use(bodyParser.json());
server.use(cookieParser());

async function createHash(param){
   const user = param;
   const saltRounds = 10;
   const myPlaintextPassword = user;
   const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
   return hash;
}

function readDatabase() {
   const data = fs.readFileSync("users.json");
   return JSON.parse(data);
   //return usersdata;
}
const express = require("express");
const cors = require("cors");
//const routesUser = require("./classRoutesUser");
const routesUser = require("./routes/routesUsers");
const routesEvents = require("./routes/routesEvents");
const routesTickets = require("./routes/routesTickets");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users/", routesUser);
app.use("/events/", routesEvents);
app.use("/tickets/", routesTickets);


app.listen(port, () => {
  console.log("Server is running!");
});