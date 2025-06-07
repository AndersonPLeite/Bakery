const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const verifyToken = require('../middleware/verifyToken');

router.post('/protegido', verifyToken, (req, res) => {
  res.json({ msg: `Olá, ${req.funcionario.nome}. Você está autenticado!` });
});

router.get('/', produtoController.index);
router.post('/', produtoController.store);
router.get('/:id', produtoController.show);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.destroy);

module.exports = router;
