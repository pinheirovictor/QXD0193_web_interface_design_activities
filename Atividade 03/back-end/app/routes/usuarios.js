const usuariosController = require("../controllers/usuarios");
const controllerAuth = require("../controllers/auth");

module.exports = (app) => {
    app.post("/api/usuarios", usuariosController.inserirUsuario);
    app.post("/api/usuarios/signin", controllerAuth.logar);

    app.use("/api/usuarios", controllerAuth.checar);
    app.get("/api/usuarios", usuariosController.listarUsuarios);
    app.delete("/api/usuarios/:id", usuariosController.removerUsuario);

};