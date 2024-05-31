const selectAll = () => {
    return db.query('select * from blog_act8.posts');
}

const selectByAuthorId = (id_author) =>{
    return db.query('select * from blog_act8.posts where fk_id_autores = ?', [id_author])
}

module.exports ={
    selectAll, selectByAuthorId
}