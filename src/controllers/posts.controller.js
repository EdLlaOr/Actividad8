const Post = require('../models/posts.model');


const getAllPosts = async (req, res) => {
    try{
        const [result] = await Post.selectAll();
        res.json(result);
    }catch(err){
        next(err);
    }
}

const getPostById = async (req, res, next) => {
    try{
        const {post_id} = req.params;
        const [result]= await Post.selectById(post_id);
        res.json(result);
    }catch(err){
        next(err);
    }
}

const createPost = async (req, res, next) => {
    try{
        Post.insert(req.body);
    }catch(err){
        next(err);
    }
}

const updatePost = async (req, res, next) => {
    try{
        const {post_id} = req.params;
        const [result] = await Post.updateById(post_id, req.body);
        const [ret] = await Post.selectById(post_id);
        res.json(ret);
    }catch(err){
        next(err)
    }
}

const deletePost = async (req, res, next) => {
    try{
        const {post_id} = req.params;
        const [result]= await Post.deleteById(post_id);
        if (result.affectedRows===1){
            res.json('Se ha borrado el post');
        }else{
            res.status(404).json({message: 'El post no existe'});
        }
    }catch(err){
        next(err);
    }
}

const getAllPostsByAuthorId = async (req, res, next) =>{
    try{
        const [result] = await Post.selectByAuthorId(req.params.author_id);
        if (result.length === 0){
            return res.status(404).json({fatal: 'Autor no encontrado'})
        }
        res.json(result);    
    }catch(err){
        next(err);
    }
}

module.exports = {
    getAllPosts, getPostById, createPost, getAllPostsByAuthorId, updatePost, deletePost
}