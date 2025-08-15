// const getConnection = require("../libs/postgres");
// const {pool} = require("../libs/postgres");

const sequelize = require("../libs/sequelize");

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

const getAllUsers = async (req, res) => {
    try {
        const query = "SELECT * FROM tasks";
        const [data] = await sequelize.query(query);
        return { data };
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {getAllUsers};
