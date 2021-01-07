const bodyParser = require('body-parser');
const express = require('express');

const routesPosts = require("../app/routes/posts");
const routesComentarios = require("../app/routes/comentarios");
const routesUsuarios = require("../app/routes/usuarios");

module.exports = function() {
    let app = express();
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static("/.public"));
    routesPosts(app);
    routesComentarios(app);
    routesUsuarios(app);
    return app;
}