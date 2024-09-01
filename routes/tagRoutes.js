const user_routes = require("express").Router();
const TagController = require("../controllers/TagController");

user_routes.post("/", TagController.create);
user_routes.get("/", TagController.getAll);
user_routes.get("/:tag_id", TagController.getById);
user_routes.put("/:tag_id", TagController.updateById);
user_routes.delete("/:tag_id", TagController.deleteById);

module.exports = user_routes;