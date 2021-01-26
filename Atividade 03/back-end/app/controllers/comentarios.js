const Comentario = require("../models/comentario");
const view = require("../views/comentarios");
const jwt = require("jsonwebtoken");


// metodo de inserir comentario no banco
module.exports.inserirComentario = (req, res) => {
    // comentario = req.body;

    let { texto, post } = req.body;
    //let { post } = req.body.post;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Comentario.create({ texto: texto, post: post, usuario: id_usuario_logado });

    promise.then(function(comentario) {
        res.status(201).json(view.render(comentario));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "sua requisição deu erro", error: error })
    })
};

// metodo de listar todos os comentarios cadastrados
module.exports.listarComentarios = function(re, res) {
    let promise = Comentario.find().exec();

    promise.then(function(comentarios) {
        res.status(201).json(view.renderMany(comentarios));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });
};

//metodo de remover comentario por id
module.exports.removerComentario = function(req, res) {
    //let id = req.params.id;


    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let comentario = {
        _id: req.params.id,
        usuario: id_usuario_logado
    }

    let promise = Comentario.findOneAndRemove(comentario)

    promise.then(function(comentario) {
        res.status(200).json(view.render(comentario));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    })
};