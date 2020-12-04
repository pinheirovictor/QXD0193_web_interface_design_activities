const post = require("../routes/posts");

let posts = [
    { id: 1, texto: "oi gente linda!", likes: "100" },
    { id: 2, texto: "fala que eu te ouvo!", likes: "600" },
    { id: 3, texto: "êpa, êpa, êpa!", likes: "800" },
    { id: 4, texto: "fora bolsonaro!", likes: "1000000" },
    { id: 5, texto: "ola mundo lindo!", likes: "9865" },

];

// GET listar posts, todos ou so por nome 
module.exports.listarPosts = (req, res) => {
    let posts_retorno = posts;
    if ("texto" in req.query) {
        let texto = req.query.texto;
        posts_retorno = posts_retorno.filter(function(post) { return post.texto == texto; });
    }
    res.json(posts_retorno);
};

// GET buscar usuario por id
module.exports.buscarPotsPorId = (req, res) => {
    let id = req.params.id;
    let post = posts.find(function(post) { return post.id == id; });
    if (post) {
        res.json(post)
    } else {
        res.status(404).json({ mensagem: "Post não encontrado!" });
    }
};


// POST, salvar um post
module.exports.inserirPost = (req, res) => {
    let post = req.body;
    posts.push(post);
    res.status(201).json(post);
};

//DELETE, escluir post por id
module.exports.deletarPost = (req, res) => {
    let id = req.params.id;
    posts = posts.filter(function(post) { return post.id != id; });
    res.json({ mensagem: "post removido!" });
};