const router = require('express').Router();

const postsController = require('../../controllers/posts.controller');

router.get('/', postsController.getAllPosts);
router.get('/:author_id', postsController.getAllPostsByAuthorId);

router.post('/',postsController.createPost);



module.exports = router;