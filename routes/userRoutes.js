const user_routes = require("express").Router();
const UserContoller = require("../controllers/userController");

user_routes.post("/", UserContoller.create);

module.exports = user_routes;