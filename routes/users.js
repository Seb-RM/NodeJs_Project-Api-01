const express = require("express");
const serviceUsers = require("../services/servicesUsers");

const router = express.Router();

// router.get("/", async (req, res) => {
//     try {
//         const users = await getAllUsers(req);
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

router.get('/', async (req, res, next)=> {
    try {
        const getUsers = await serviceUsers.getAllUsers(req,res);
        return res.send({getUsers})
    } catch(error){
        next(error)
    }
});

module.exports = router;
