const { Router } = require('express');
const activity = require('./activity');
const countries = require('./countries')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countries)
router.use("/activity", activity)

module.exports = router;
