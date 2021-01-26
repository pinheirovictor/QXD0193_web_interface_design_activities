const Usuario = require("../models/usuario");
const Post = require("../models/post");
const view = require("../views/usuarios");
const viewPosts = require("../views/posts");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// metodo de inserir usuario no banco
module.exports.inserirUsuario = (req, res) => {
    //let usuario = req.body;

    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }
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

//metodo de remover usuario por id
module.exports.removerUsuario = function(req, res) {
    let id = req.params.id;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    if (id_usuario_logado != id) {
        res.status(500).json({ mensagem: "sua requisição deu erro" })
    } else {
        let promise = Usuario.findByIdAndDelete(id);

        promise.then(function(usuario) {
            res.status(200).json(view.render(usuario));
        }).catch(function(error) {
            res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
        })
    }
};