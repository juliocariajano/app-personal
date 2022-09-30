const { Router } = require('express');
const routeStaffs = require ('./routerStaffs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/staffs', routeStaffs);

module.exports = router;
