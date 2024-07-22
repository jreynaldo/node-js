const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');


router.get('/', estudiantesController.consultar);

router.post('/', estudiantesController.ingresar);

router.route('/:id')
    .get(estudiantesController.consultarDetalle)
    .put(estudiantesController.actulizar)
    .delete(estudiantesController.borrar)

module.exports = router;