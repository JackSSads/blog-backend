const user_routes = require("express").Router();
const PostController = require("../controllers/PostController");

user_routes.post("/", PostController.create);
user_routes.get("/", PostController.getAll);
user_routes.get("/:post_id", PostController.getById);
user_routes.put("/:post_id", PostController.updateById);
user_routes.delete("/:post_id", PostController.deleteById);

module.exports = user_routes;