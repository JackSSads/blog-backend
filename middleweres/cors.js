// configuração do CORS
require("dotenv").config();
const cors = require("cors");

const conf_cors = cors({
    origin: ['*'], // aberto temporariamente
    credentials: true,
    methods: "GET, POST PUT, DELETE",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
});

module.exports = conf_cors;