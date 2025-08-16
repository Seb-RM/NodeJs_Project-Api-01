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

router.post("/", async(req, res, next) => {
    try {
        const body = req.body;
        const newUser = await serviceUsers.createUser(body);
        return newUser;
    } catch (error) {
        next(error);
    }
});

router.patch("/:id", async(req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const updateUser = await serviceUsers.updateUser({id, body});
        return res.json(updateUser);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next)=>{
    try {
        const {id} = req.params;
        const userDelete = await serviceUsers.deleteUser({id});
        return res.json(userDelete);
    } catch (error) {
        next(error) 
    }
});

module.exports = router;
