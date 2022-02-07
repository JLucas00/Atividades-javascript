const express = require('express');
const app = express();
const server = express();
const port1 = 8080;
const port2 = 8081;


app.use(express.static('./src/funcionarios'));
app.listen(port1, () => console.log(`Example app listening on port ${port1}!`));

server.use(express.static('./src/calculadora'));
server.listen(port2, () => console.log(`Example app listening on port ${port2}!`));