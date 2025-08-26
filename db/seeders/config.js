const { database } = require("faker/lib/locales/en");
const { config } = require("../../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;



module.exports = {
    development: {
        username: "admin",
        password: "admin1234",
        database: "my_api",
        url: URI,
        dialect: "postgres",
    },
    production: {
        username: "admin",
        password: "admin1234",
        database: "my_api",
        url: URI,
        dialect: "postgres",
    },
};