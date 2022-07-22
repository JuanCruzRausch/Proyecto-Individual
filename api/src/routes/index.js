const { Router } = require('express');
const activity = require('./activity');
const continents = require('./continents');
const countries = require('./countries');
const filters = require('./filters');
const trivia = require('./trivia');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countries)
router.use("/activity", activity)
router.use("/continents", continents)
router.use("/filters", filters)
router.use("/trivia",trivia)

module.exports = router;
