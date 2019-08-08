const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.js');

router.post('/', loginController.login);

module.exports = router;


