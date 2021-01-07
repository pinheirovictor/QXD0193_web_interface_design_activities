const Post = require("../models/post");
const Comentario = require("../models/comentario");
const view = require("../views/posts");
const viewComentarios = require("../views/comentarios");

// metodo de inserir post no banco
module.exports.inserirPost = (req, res) => {
    let post = req.body;
    let promise = Post.create(post);

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

//metodo de buscar post por id
module.exports.buscarPostPorId = function(req, res) {
    let id = req.params.id;
    let promise = Post.findById(id).exec();

    promise.then(function(post) {
        res.status(200).json(view.render(post));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });
};

//metodo de remover post por id
module.exports.removerPost = function(req, res) {
    let id = req.params.id;
    let promise = Post.findByIdAndDelete(id);

    promise.then(function(post) {
        res.status(200).json(view.render(post));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    })
};

// metodo que mostra comentarios de um post
module.exports.obterComentarios = function(req, res) {
    let id = req.params.id;
    let promise = Comentario.find({ post: id }).exec();

    promise.then(function(comentarios) {
        res.status(200).json(viewComentarios.renderMany(comentarios));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });

};