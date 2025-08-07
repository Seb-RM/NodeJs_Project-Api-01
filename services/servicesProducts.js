const faker = require("faker");

const getAllProducts = async (req) => {
    try {
        const products = [];
        const { size } = req.query;
        const limit = size || 5;
        for (let index = 0; index < limit; index++) {
            products.push({
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            });
        }
        return products;
    } catch (error) {
        throw new Error("Error al obtener productos");
    }
};

const createNewProduct = async (req) => {
    try {
        const body = req.body;
        return {
            ok: true,
            data: body,
        };
    } catch (error) {
        throw new Error("Error al crear producto");
    }
};

const updateProduct = async (req) => {
    try {
        const { id } = req.params;
        const body = req.body;
        return {
            message: "success",
            product: body,
            id,
        };
    } catch (error) {
        throw new Error("Error al actualizar producto");
    }
};

const deleteProduct = async (req) => {
    try {
        const { id } = req.params;
        return {
            message: "delete",
            id,
        };
    } catch (error) {
        throw new Error("Error al eliminar producto");
    }
};

const getOneProduct = async (req) => {
    try {
        const { id } = req.params;
        return {
            id: id,
            name: "Teclado",
            price: 2000,
            category: "technology",
            stock: 10,
        };
    } catch (error) {
        throw new Error("Error al obtener producto");
    }
};

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct,
};
