const selectAll = () => {
    return db.query('SELECT * FROM blog_act8.autores');
}

const selectById = (autor_id) => {
    return db.query('SELECT * FROM blog_act8.autores WHERE id_autor = ?', [autor_id]);
}

const insert = ({nombre, email, imagen}) => {
    return db.query('insert into blog_act8.autores (nombre, email, imagen) values (?,?,?)',[nombre, email, imagen]);
}

const updateById = (autor_id, {nombre, email, imagen}) => {
    return db.query('update blog_act8.autores set nombre=?, email=?, imagen=? where id_autor=?', [nombre, email, imagen, autor_id]);
}

const deleteById = (autor_id) => {
    return db.query('delete from blog_act8.autores where id_autor=?',[autor_id]);
}

module.exports ={
    selectAll, selectById, insert, updateById, deleteById
}