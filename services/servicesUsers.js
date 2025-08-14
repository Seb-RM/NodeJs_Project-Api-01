const getConnection = require("../libs/postgres");

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
    const client = await getConnection();
    const response = await client.query('SELECT * FROM tasks');
    return response.rows;
}

module.exports = {getAllUsers};
