function render(comentario) {
    return {
        id: comentario.id,
        texto: comentario.texto,
        post: comentario.post,
        usuario: comentario.usuario,
    }
}

module.exports.render = render;

function renderMany(comentarios) {
    return comentarios.map(render);
}

module.exports.renderMany = renderMany;