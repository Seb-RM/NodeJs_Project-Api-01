const productsRouter = require('../routes/products');
const usersRouter = require('../routes/users');
const clientRouter = require("../routes/client");
const express = require("express");

function apiRouter (app) {
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use("/clients", clientRouter);
}

module.exports = apiRouter;
