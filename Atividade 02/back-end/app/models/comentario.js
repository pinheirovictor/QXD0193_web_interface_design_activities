const mongoose = require('mongoose');

module.exports = function() {
    let schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true,
        },
        post: {
            type: mongoose.Schema.ObjectId,
            ref: 'Post',
            required: true,
        },
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario',
            required: true,
        }
    });
    return mongoose.model("Comentario", schema);
}();