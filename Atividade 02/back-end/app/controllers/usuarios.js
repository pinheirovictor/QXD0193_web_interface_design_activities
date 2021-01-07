const Usuario = require("../models/usuario");
const Post = require("../models/post");
const view = require("../views/usuarios");
const viewPosts = require("../views/posts");


// metodo de inserir usuario no banco
module.exports.inserirUsuario = (req, res) => {
    let usuario = req.body;
    let promise = Usuario.create(usuario);

    promise.then(function(usuario) {
        res.status(201).json(view.render(usuario));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "sua requisição deu erro", error: error })
    })
};


// metodo de listar usuarios cadastrados
module.exports.listarUsuarios = function(re, res) {
    let promise = Usuario.find().exec();

    promise.then(function(usuarios) {
        res.status(201).json(view.renderMany(usuarios));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });
};

//metodo de buscar usuario por id
module.exports.buscarUsuarioPorId = function(req, res) {
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();

    promise.then(function(usuario) {
        res.status(200).json(view.render(usuario));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });
};

//metodo de remover usuario por id
module.exports.removerUsuario = function(req, res) {
    let id = req.params.id;
    let promise = Usuario.findByIdAndDelete(id);

    promise.then(function(usuario) {
        res.status(200).json(view.render(usuario));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    })
};


// metodo que mostra posts de um usuario
module.exports.obterPosts = function(req, res) {
    let id = req.params.id;
    let promise = Post.find({ usuario: id }).exec();

    promise.then(function(posts) {
        res.status(200).json(viewPosts.renderMany(posts));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });

};