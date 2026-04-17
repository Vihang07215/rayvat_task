const express = require ('express');
const router = express.Router();

const userRoute = require('./userRoute');
const eventRoute = require('./eventRoute');

router.use('/users',userRoute);
router.use('/events',eventRoute);

module.exports = router;