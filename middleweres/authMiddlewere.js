const auth_middlewere = (req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    };

    next();
};

module.exports = auth_middlewere;