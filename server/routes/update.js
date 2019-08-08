const express = require('express');
const router = express.Router();
const updateController = require('../controllers/books.js');

router.get('/delete/:id', updateController.delete);
router.post('/create', updateController.create);
router.post('/', updateController.update);

module.exports = router;
