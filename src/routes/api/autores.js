const router = require('express').Router();

const autoresController = require('../../controllers/autores.controller');

router.get('/', autoresController.getAllAuthors);
router.get('/:autor_id', autoresController.getAuthorById);

router.post('/',autoresController.createAuthor);
router.put('/:autor_id',autoresController.updateAuthor);
router.delete('/:autor_id',autoresController.deleteAuthor);

module.exports = router;