const { Router } = require('express');
const { getAllLogs, getAllOccupiedLogs, postNewLog, checkOutLog } = require('./controllers/parkingLog.controller');
const router = Router();

router.get('/logs/all', getAllLogs);
router.get('/logs/occupied', getAllOccupiedLogs);
router.post('/logs/new', postNewLog);
router.put('/logs/check-out/:id', checkOutLog);

module.exports = router;