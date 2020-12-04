const usuarioController = require("../controllers/usuario");

module.exports = (app) => {
    //GET usuarios
    app.get("/api/usuarios", usuarioController.listarUsuarios);
    app.get("/api/usuarios/:id", usuarioController.buscarUsuarioId);

    //POST usuarios
    app.post("/api/usuarios", usuarioController.inserirUsuario);

    //DELETE usuarios
    app.delete("/api/usuarios/:id", usuarioController.deletarUsuario);
};