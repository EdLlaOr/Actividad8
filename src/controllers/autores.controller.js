const Autor = require('../models/autores.model');

const getAllAuthors = async (req, res, next) => {
    try{
        const [result] = await Autor.selectAll();
        res.json(result);
    }catch(err){
        next(err);
    }
}

const getAuthorById = async (req, res, next) => {
    try{
        const {autor_id} = req.params;
        const [result]= await Autor.selectById(autor_id);
        res.json(result);
    }catch(err){
        next(err);
    }
}

const createAuthor = async (req, res, next) => {
    try{
        Autor.insert(req.body);
    }catch(err){
        next(err);
    }
}

const updateAuthor = async (req, res, next) => {
    try{
        const {autor_id} = req.params;
        const [result] = await Autor.updateById(autor_id, req.body);
        const [ret] = await Autor.selectById(autor_id);
        res.json(ret);
    }catch(err){
        next(err)
    }
}

const deleteAuthor = async (req, res, next) => {
    try{
        const {autor_id} = req.params;
        const [result]= await Autor.deleteById(autor_id);
        if (result.affectedRows===1){
            res.json('Se ha borrado el autor');
        }else{
            res.status(404).json({message: 'El autor no existe'});
        }
    }catch(err){
        next(err);
    }
}

module.exports = {
    getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor
}