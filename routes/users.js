const express = require("express");
const getAllUsers = require("../services/servicesUsers");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers(req);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
