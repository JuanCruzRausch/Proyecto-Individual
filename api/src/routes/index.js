const { Router } = require('express');
const activity = require('./activity');
const continents = require('./continents');
const countries = require('./countries');
const filters = require('./filters');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countries)
router.use("/activity", activity)
router.use("/continents", continents)
router.use("/filters", filters)

module.exports = router;
