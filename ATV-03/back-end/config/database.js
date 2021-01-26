const mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', function() {
        console.log('Mongoose! Conectado em ' + uri);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose! Desconectado em ' + uri);
    });

    mongoose.set('debug', true);
}