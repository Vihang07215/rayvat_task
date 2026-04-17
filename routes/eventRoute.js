const express = require ('express');
const router = express.Router();

const eventController = require('../controller/eventController');
const authenticate = require('../middleware/auth.middeware');
const authorize = require('../middleware/role.middeware');

router.post('/create',authenticate,authorize('admin'),eventController.create);
router.get('/getEvents',authenticate,eventController.getEvents);
router.put('/updateEvent/:id',authenticate,authorize('admin'),authenticate,eventController.updateEvent);
router.delete('/deleteEvent/:id',authenticate,authorize('admin'),authenticate,eventController.deleteEvent);

module.exports = router;