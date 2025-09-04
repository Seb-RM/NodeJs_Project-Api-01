// const faker = require("faker");
// const boom = require("@hapi/boom");

const sequelize = require("../libs/sequelize");
const { models } = require("../libs/sequelize");

// const getAllProducts = async (req) => {
//     try {
//         const products = [];
//         const { size } = req.query;
//         const limit = size || 5;
//         for (let index = 0; index < limit; index++) {
//             products.push({
//                 name: faker.commerce.productName(),
//                 price: parseInt(faker.commerce.price(), 10),
//                 image: faker.image.imageUrl(),
//             });
//         }
//         return products;
//     } catch (error) {
//         throw new Error("Error al obtener productos");
//     }
// };

const getAllProducts = async () => {
    try {
        const data = await models.Product.findAll({
            include: ["category"],
        });
        return {
            data,
        };
    } catch (error) {
        console.log(error);
    }
};

const createNewProduct = async (body) => {
    try {
        console.log(body);
        const newCategory = await models.Product.create(body);
        return newCategory;
    } catch (error) {
        console.log(error);
    }
};

const updateProduct = async (id, body) => {
    try {
        const category = await models.Product.findByPk(id);
        if (!category) {
            return {
                error: "category not found",
            };
        }
        const response = await category.update(body);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct = async (id) => {
    try {
        const category = await models.Product.findByPk(id);
        await category.destroy();
        return {
            message: "category delete",
            id,
        };
    } catch (error) {
        console.log(error);
    }
};

const getOneProduct = async (id) => {
    try {
        const product = await models.Product.findByPk(id);
        if (!product) {
            return {
                message: "product not found",
            };
        }
        return product;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct,
};
