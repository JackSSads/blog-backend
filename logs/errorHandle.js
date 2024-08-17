const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Middleware para tratamento de erros
const errorHandler = (error, req, res, next) => {
    const errorLog = fs.createWriteStream(
        path.join(__dirname, 'error.log'),
        { flags: "a" },
    );

    // Log do erro usando Morgan
    morgan("combined", { stream: errorLog })(req, res, () => { });

    // Log personalizado do erro
    const errorDetails = `
    \n\n[ ========== ]
    [Time]: ${new Date().toISOString()}\n
    [Error]: ${error.message}\n
    [Status]: ${error.status || 500}\n
    [URL]: ${req.url}\n\n
    [ ========== ]\n\n`;

    errorLog.write(errorDetails);

    // Enviando resposta genérica ao cliente
    res.status(error.status || 500);
    res.send('Ocorreu um erro no servidor!');
};

module.exports = errorHandler;
