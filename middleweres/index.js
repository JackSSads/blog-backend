const logger = require("./logger");
const conf_cors = require("./cors");
const conf_session = require("./sessions");
const auth_middlewere = require("./authMiddlewere");

module.exports = {
    logger,
    conf_cors,
    conf_session,
    auth_middlewere
};