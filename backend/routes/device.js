const express = require('express');
const router = express.Router();
const logger = require('../helpers/logger');

// Routes
router.get('/summary', getSummary);
router.get('/:deviceId', getDeviceInfo);

// Functions

async function getDeviceInfo(req, res) {
  logger.info('API route /:deviceId: ' + req.params.deviceId);

  const deviceId = req.params.deviceId;
  const payload = {
    id: deviceId,
    name: `trashCompactorUnit${deviceId}`,
    status: 'normal'
  };

  return res.json({ status: 200, success: true, data: payload });
}

async function getSummary(req, res) {
  logger.info('API route /summary');

  return res.json({
    status: 200,
    success: true,
    message: 'summary endpoint'
  });
}

module.exports = router;
