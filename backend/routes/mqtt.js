const express = require('express');
const router = express.Router();
const logger = require('../helpers/logger');

// Routes
router.get('/sub', getSubscriptions);
router.get('/pub', sendPub);

// Functions
async function getSubscriptions(req, res) {
  logger.info('Running env: ' + config.env);

  const deviceId = req.params.deviceId;
  const payload = {
    id: deviceId,
    name: `trashCompactorUnit${deviceId}`,
    status: 'normal'
  };

  return res.json({ status: 200, success: true, data: payload });
}

async function sendPub(req, res) {
  logger.info('Running env: ' + config.env);

  return res.json({
    status: 200,
    success: true,
    message: 'senidng push message'
  });
}

module.exports = router;
