const user_routes = require("express").Router();
const PostTagController = require("../controllers/PostTagController");

user_routes.post("/", PostTagController.create);
user_routes.get("/", PostTagController.getAll);
user_routes.get("/:post_id", PostTagController.getById);
user_routes.put("/:post_id", PostTagController.updateById);
user_routes.delete("/:post_id", PostTagController.deleteById);

module.exports = user_routes;