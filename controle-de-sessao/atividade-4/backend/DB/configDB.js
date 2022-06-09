const { Client } = require("pg");

const client = () =>{
 return  new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT
  });
} 

module.exports = client;