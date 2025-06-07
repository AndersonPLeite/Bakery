const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.index);
router.post('/', clienteController.store);

module.exports = router;
