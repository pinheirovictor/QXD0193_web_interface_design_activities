function render(post) {
    return {
        id: post.id,
        texto: post.texto,
        likes: post.likes,
        usuario: post.usuario,
    }
}

module.exports.render = render;

function renderMany(posts) {
    return posts.map(render);
}

module.exports.renderMany = renderMany;