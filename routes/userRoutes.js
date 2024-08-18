const user_routes = require("express").Router();
const UserContoller = require("../controllers/userController");

user_routes.post("/", UserContoller.create);
user_routes.get("/", UserContoller.getAll);
user_routes.get("/:user_id", UserContoller.getById);
user_routes.put("/:user_id", UserContoller.updateById);
user_routes.delete("/:user_id", UserContoller.deleteById);

module.exports = user_routes;