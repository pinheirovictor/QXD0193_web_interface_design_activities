const usuariosController = require("../controllers/usuarios");

module.exports = (app) => {
    app.post("/api/usuarios", usuariosController.inserirUsuario);
    app.get("/api/usuarios", usuariosController.listarUsuarios);
    app.get("/api/usuarios/:id", usuariosController.buscarUsuarioPorId);
    app.delete("/api/usuarios/:id", usuariosController.removerUsuario);
    app.get("/api/usuarios/:id/posts", usuariosController.obterPosts);
};