const Post = require("../models/post");
const view = require("../views/posts");
const jwt = require("jsonwebtoken");

// metodo de inserir post no banco
module.exports.inserirPost = (req, res) => {
    let { texto, likes } = req.body;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Post.create({ texto: texto, likes: likes, usuario: id_usuario_logado })

    promise.then(function(post) {
        res.status(201).json(view.render(post));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "sua requisição deu erro", error: error })
    })
};


// metodo de listar posts cadastrados
module.exports.listarPosts = function(re, res) {
    let promise = Post.find().exec();

    promise.then(function(posts) {
        res.status(201).json(view.renderMany(posts));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });
};

//metodo de remover post por id
module.exports.removerPost = function(req, res) {
    //let post = req.body;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let post = {
        _id: req.params.id,
        usuario: id_usuario_logado
    }

    let promise = Post.findOneAndRemove(post);

    promise.then(function(post) {
        res.status(200).json(view.render(post));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    })


};