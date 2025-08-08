const express = require("express");
const productsServices = require("../services/servicesProducts");
const validatorHandler = require("../middleware/validator.handler");

const { createProductSchema, updateProductSchema, getProductSchema, } = require("../schema/schemaProducts");

const router = express.Router();

router.get("/", async (req, res) => {
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
            const product = await productsServices.createNewProduct(req);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

router.patch("/:id", validatorHandler(getProductSchema, "params"), validatorHandler(updateProductSchema, "body"), async (req, res) => {
    try {
        const updatedProduct = await productsServices.updateProduct(req);
        res.json(updatedProduct);
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
        const product = await productsServices.getOneProduct(req);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
