const postsController = require("../controllers/posts");

module.exports = (app) => {
    app.post("/api/posts", postsController.inserirPost);
    app.get("/api/posts", postsController.listarPosts);
    app.get("/api/posts/:id", postsController.buscarPostPorId);
    app.delete("/api/posts/:id", postsController.removerPost);
    app.get("/api/posts/:id/comentarios", postsController.obterComentarios);
};