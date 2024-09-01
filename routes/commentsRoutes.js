const user_routes = require("express").Router();
const CommentsController = require("../controllers/CommentsController");

user_routes.post("/", CommentsController.create);
user_routes.get("/", CommentsController.getAll);
user_routes.get("/:comment_id", CommentsController.getById);
user_routes.put("/:comment_id", CommentsController.updateById);
user_routes.delete("/:comment_id", CommentsController.deleteById);

module.exports = user_routes;