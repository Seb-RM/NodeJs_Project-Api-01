const { Pool } = require("pg");

// async function getConnection() {
//     const client = new pg.Client({
//         host: "localhost",
//         port: "5432",
//         user: "admin",
//         password: "admin1234",
//         database: "my_api",
//     });
//     await client.connect();
//     return client;
// }

// module.exports = getConnection;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user:"admin",
    password: "admin1234",
    database: "my_api"
});

module.exports = pool;