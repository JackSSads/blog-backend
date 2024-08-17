const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT

// conexão com o banco de dados
const connection = require("./db/connection");

// import das rotas
//const { auth_router } = require("./routes");

// import dos middleweres
const { conf_cors, logger, conf_session } = require("./middleweres");

// import logs de erros
const errorHandler = require('./logs/errorHandle');

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
app.use(conf_session);

// verificar se usuário está logado


// endpoits
//app.use("/auth", auth_router);

// Servindo API se o db estiver conectado
connection
    .sync()
    .then(() => {
        app.listen(PORT);
    })
    .catch((error) => console.log(error));