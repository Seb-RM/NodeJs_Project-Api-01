const { Pool } = require("pg");
const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
console.log(config);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// async function getConnection() {
//     const client = new pg.Client({
//         host: "",
//         port: "",
//         user: "",
//         password: "",
//         database: "",
//     });
//     await client.connect();
//     return client;
// }

// module.exports = getConnection;


// const pool = new Pool({
//     host: "localhost",
//     port: ,
//     user:"",
//     password: "",
//     database: ""
// });
const pool = new Pool({ connectionString: URI });

module.exports = {pool};