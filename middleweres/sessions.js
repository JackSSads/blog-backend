const session = require("express-session");
const FileStore = require("session-file-store")(session);
const path = require("path")
const os = require("os")
require("dotenv").config();

const conf_session = session({
    name: "session",
    secret: process.env.TOKEN_SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: () => {},
        path: path.join(os.tmpdir(), 'sessions'),
    }),
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    },
});

module.exports = conf_session;