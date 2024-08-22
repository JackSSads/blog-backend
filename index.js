const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT

// conexão com o banco de dados
const connection = require("./db/connection");

// import das rotas
const { auth_router, user_routes, category_routes } = require("./routes");

// import dos middleweres
const { conf_cors, logger, conf_session, auth_middlewere } = require("./middleweres");

// import logs de erros
const errorHandler = require('./logs/errorHandle');

// import models
const tag = require("./models/Tag");
const post = require("./models/Post");
const user = require("./models/User");
const category = require("./models/Category");
const comment = require("./models/Comments");
const post_tag = require("./models/Post_tag");
const post_category = require("./models/Post_Category");

// configuração do express
app.use(
    express.urlencoded({
        extends: true,
    }),
);
app.use(express.json());

// Middleweres
app.use(logger);
app.use(conf_cors);
app.use(errorHandler);
//app.use(conf_session);
//app.use(auth_middlewere);

// endpoits
app.use("/auth", auth_router);
app.use("/user", user_routes);
app.use("/category", category_routes);

// Servindo API se o db estiver conectado
connection
    //.sync({ force: true })
    .sync()
    .then(() => {
        app.listen(PORT);
    })
    .catch((error) => console.log(error));