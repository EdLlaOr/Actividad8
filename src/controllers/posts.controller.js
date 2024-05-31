const Post = require('../models/posts.model');


const getAllPosts = async (req, res) => {
    const [result] = await Post.selectAll();
    res.json(result);
}

const createPost = (req, res) => {

}

const upDatePost = (req, res) => {

}

const deletePost = (req, res) => {

}

const getAllPostsByAuthorId = async (req, res) =>{
    console.log(req.params.author_id);
    const [result] = await Post.selectByAuthorId(req.params.author_id);
    res.json(result);
}

module.exports = {
    getAllPosts, createPost, getAllPostsByAuthorId
}