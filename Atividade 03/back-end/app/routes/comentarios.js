const comentariosController = require("../controllers/comentarios");
const controllerAuth = require("../controllers/auth");


module.exports = (app) => {


    app.use("/api/comentarios", controllerAuth.checar);
    app.post("/api/comentarios", comentariosController.inserirComentario);
    app.get("/api/comentarios", comentariosController.listarComentarios);
    app.delete("/api/comentarios/:id", comentariosController.removerComentario);
};