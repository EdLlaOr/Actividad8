const selectAll = () => {
    return db.query('SELECT * FROM blog_act8.posts po INNER JOIN blog_act8.autores au ON po.fk_id_autores = au.id_autor');
}

const selectById = (post_id) => {
    return db.query('SELECT * FROM blog_act8.posts WHERE id_posts = ?', [post_id]);
}

const selectByAuthorId = (id_author) => {
    return db.query('SELECT * FROM blog_act8.posts po INNER JOIN blog_act8.autores au ON po.fk_id_autores = au.id_autor WHERE po.fk_id_autores= ?', [id_author]);
}

const insert = ({titulo, descripcion, categoria, fk_id_autores}) => {
    return db.query('insert into blog_act8.posts (titulo, descripcion, categoria, fk_id_autores) values (?,?,?,?)',[titulo, descripcion, categoria, fk_id_autores]);
}

const updateById = (post_id, {titulo, descripcion, categoria, fk_id_autores}) => {
    return db.query('update blog_act8.posts set titulo=?, descripcion=?, categoria=?, fk_id_autores=? where id_posts=?', [titulo, descripcion, categoria, fk_id_autores, post_id]);
}

const deleteById = (post_id) => {
    return db.query('delete from blog_act8.posts where id_posts=?',[post_id]);
}

module.exports ={
    selectAll, selectById, selectByAuthorId, insert, updateById, deleteById
}