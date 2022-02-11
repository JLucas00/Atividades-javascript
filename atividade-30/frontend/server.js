const express = require('express');
const app = express();
const app2 = express();
const app3 = express();
const port1 = 8080;
const port2 = 8081;
const port3 = 8083;


app.use(express.static('./src/funcionarios'));
app.listen(port1, () => console.log(`Example app listening on port ${port1}!`));

app2.use(express.static('./src/calculadora'));
app2.listen(port2, () => console.log(`Example app listening on port ${port2}!`));

app3.use(express.static('./src/gamesmagazine'));
app3.listen(port3, () => console.log(`Example app listening on port ${port3}!`));