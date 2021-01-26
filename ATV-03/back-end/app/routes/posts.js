const postsController = require("../controllers/posts");
const controllerAuth = require("../controllers/auth");


module.exports = (app) => {

    app.use("/api/posts", controllerAuth.checar);
    app.post("/api/posts", postsController.inserirPost);
    app.get("/api/posts", postsController.listarPosts);
    app.delete("/api/posts/:id", postsController.removerPost);

};