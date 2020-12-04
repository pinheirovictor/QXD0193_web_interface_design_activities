const bodyParser = require('body-parser');
const express = require('express');
const routesUsuarios = require("../app/routes/usuario");
const routesPosts = require("../app/routes/posts");

module.exports = function() {
    let app = express();
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static("/.public"));
    routesUsuarios(app);
    routesPosts(app);
    return app;
}