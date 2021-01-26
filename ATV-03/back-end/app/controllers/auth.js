const bcrypt = require("bcrypt");
const Usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");


// metodo de logar
module.exports.logar = function(req, res) {
    Usuario.findOne({ email: req.body.email })
        .then(function(usuario) {
            if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
                let token = jwt.sign({ id: usuario._id }, "senha_secreta");
                res.status(200).json({ token: token });
            } else {
                res.status(401).send("ERRO!")
            }
        }).catch(function(error) {
            res.status(401).send("ERRO!")
        })
}

// metodo de checar rotas
module.exports.checar = function(req, res, next) {
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta", function(err, decode) {
        if (err) {
            res.status(401).send("Token inválido");
        } else {
            next();
        }
    })
}