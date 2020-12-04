const postController = require("../controllers/posts");

module.exports = (app) => {
    //GET posts
    app.get("/api/posts", postController.listarPosts);
    app.get("/api/posts/:id", postController.buscarPotsPorId);

    //POST posts
    app.post("/api/posts", postController.inserirPost);

    //DELETE posts
    app.delete("/api/posts/:id", postController.deletarPost);
};