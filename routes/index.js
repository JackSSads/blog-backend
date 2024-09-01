const auth_router = require("./authRouter");

const user_routes = require("./userRoutes");
const category_routes = require("./categoryRoutes");
const tag_routes = require("./tagRoutes");
const comments_routes = require("./commentsRoutes");
const post_routes = require("./postRoutes");

const post_category_routes = require("./postCategoryRoutes");
const post_tag_routes = require("./postTagRoutes");

module.exports = {
    auth_router,
    user_routes,
    category_routes,
    tag_routes,
    comments_routes,
    post_routes,
    post_category_routes,
    post_tag_routes
};
