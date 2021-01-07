const comentariosController = require("../controllers/comentarios");

module.exports = (app) => {
    app.post("/api/comentarios", comentariosController.inserirComentario);
    app.get("/api/comentarios", comentariosController.listarComentarios);
    app.delete("/api/comentarios/:id", comentariosController.removerComentario);
};