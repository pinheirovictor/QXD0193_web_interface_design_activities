const usuario = require("../routes/usuario");

let usuarios = [
    { id: 1, nome: "victor", email: "pinheiro@gmail.com", senha: "1234567" },
    { id: 2, nome: "erilane", email: "lima@yahoo.com.br", senha: "1234567" },
    { id: 3, nome: "lucas", email: "pinheiro@bol.com", senha: "1234567" },
    { id: 4, nome: "pedro", email: "pinheiro@terra.com.br", senha: "1234567" },
    { id: 5, nome: "Francisco", email: "Machado@outlook.com", senha: "1234567" },
];

// GET listar usuarios, todos ou so por nome 
module.exports.listarUsuarios = (req, res) => {
    let usuarios_retorno = usuarios;
    if ("nome" in req.query) {
        let nome = req.query.nome;
        usuarios_retorno = usuarios_retorno.filter(function(usuario) { return usuario.nome == nome; });
    }
    res.json(usuarios_retorno);
};

// GET buscar usuario por id
module.exports.buscarUsuarioId = (req, res) => {
    let id = req.params.id;
    let usuario = usuarios.find(function(usuario) { return usuario.id == id; });
    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({ mensagem: "Usuario não encontrado!" });
    }
};

// POST, salvar um usuario
module.exports.inserirUsuario = (req, res) => {
    let usuario = req.body;
    usuarios.push(usuario);
    res.status(201).json(usuario);
};

//DELETE, escluir usuario por id
module.exports.deletarUsuario = (req, res) => {
    let id = req.params.id;
    usuarios = usuarios.filter(function(usuario) { return usuario.id != id; });
    res.json({ mensagem: "usuario removido!" });
};