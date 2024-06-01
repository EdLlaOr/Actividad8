const router = require('express').Router();

const postsController = require('../../controllers/posts.controller');

router.get('/', postsController.getAllPosts);
router.get('/:post_id', postsController.getPostById);
router.get('/autor/:author_id', postsController.getAllPostsByAuthorId);

router.post('/',postsController.createPost);
router.put('/:post_id',postsController.updatePost);
router.delete('/:post_id',postsController.deletePost);


module.exports = router;