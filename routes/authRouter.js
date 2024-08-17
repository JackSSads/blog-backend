const auth_router = require("express").Router();

const auth = require("../auth");

auth_router.get("/", auth, (req, res) => {
    res.status(200).json({ authenticated: true });
});

module.exports = auth_router;