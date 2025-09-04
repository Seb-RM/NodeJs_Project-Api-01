const express = require("express");
const productsServices = require("../services/servicesProducts");
const validatorHandler = require("../middleware/validator.handler");

const { createProductSchema, updateProductSchema, getProductSchema, } = require("../schema/schemaProducts");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const products = await productsServices.getAllProducts(req);
        res.json(products);
    } catch (error) {
        //     res.status(500).json({ error: error.message });
        next(error)
    }
});

router.post(
    "/",
    validatorHandler(createProductSchema, "body"),
    async (req, res) => {
        try {
            const body = req.body;
            console.log(body);
            const createProduct = await productsServices.createNewProduct(body);
            return res.send(createProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

router.patch("/:id", validatorHandler(getProductSchema, "params"), validatorHandler(updateProductSchema, "body"), async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updateProduct = await productsServices.updateProduct(id, body);
        return res.send({ updateProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await productsServices.deleteProduct(req);
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", validatorHandler(getProductSchema, 'params'), async (req, res) => {
    try {
        const { id } = req.params;
        const productOne = await productsServices.getOneProduct(id);
        return res.send({ productOne });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
