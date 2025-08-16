// const getConnection = require("../libs/postgres");
// const {pool} = require("../libs/postgres");
// const sequelize = require("../libs/sequelize");
const { models } = require("../libs/sequelize");

// const getAllUsers = async (req) => {
//     try {
//         const { limit, offset } = req.query;
//         if (limit && offset) {
//             return {
//                 limit,
//                 offset,
//             };
//         } else {
//             return { message: "No hay ningún parámetro." };
//         }
//     } catch (error) {
//         throw new Error("Error al obtener usuarios");
//     }
// };

// const getAllUsers = async (req, res) => {
//     try {
//         const query = "SELECT * FROM tasks";
//         const [data] = await sequelize.query(query);
//         return { data };
//     } catch (error) {
//         console.log(error)
//     }

// }

const getAllUsers = async () => {
    const response = await models.User.findAll();
    return response
}

const findOne = async (id) => {
    try {
        const user = await models.User.findByPk(id);
        if (!user) {
            return {
                error: "User not found.",
            };
        }
        return user;
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (body) => {
    try {
        const newUser = await models.User.create(body);
        return {
            user: newUser,
            message: "User created."
        }
    } catch (error) {
        console.log(error)
    }
};

const updateUser = async ({ id, body }) => {
    try {
        const user = await models.User.findByPk(id);
        if (!user) {
            return {
                error: "User not found."
            }
        }
        const response = await user.update(body);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (id) => {
    try {
        const user = await models.User.findOne(id);
        if (!user) {
            return {
                error: "User not found."
            }
        }
        await user.destroy();
        return {
            message: "User deleted.",
            id
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};
