const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.get('/', profesoresController.consultar);

router.post('/', profesoresController.ingresar);

router.route('/:id')
    .get(profesoresController.consultarDetalle)
    .put(profesoresController.actulizar)
    .delete(profesoresController.borrar)

module.exports = router;