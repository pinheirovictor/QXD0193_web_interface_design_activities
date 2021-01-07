const Comentario = require("../models/comentario");
const view = require("../views/comentarios");

// metodo de inserir comentario no banco
module.exports.inserirComentario = (req, res) => {
    let comentario = req.body;
    let promise = Comentario.create(comentario);

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
    let id = req.params.id;
    let promise = Comentario.findByIdAndDelete(id);

    promise.then(function(comentario) {
        res.status(200).json(view.render(comentario));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    })
};