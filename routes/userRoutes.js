const user_routes = require("express").Router();
const UserContoller = require("../controllers/userController");

user_routes.post("/", UserContoller.create);
user_routes.get("/", UserContoller.getAll);
user_routes.get("/:username", UserContoller.getByUsername);
user_routes.put("/:username", UserContoller.updateByUsername);

module.exports = user_routes;