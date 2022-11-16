const express = require('express');
const router = express.Router();
const logger = require('../helpers/logger');
const mqtt = require('mqtt');

// Routes
router.get('/sub', getSubscriptions);
router.get('/pub', sendPub);
const options = {
  clientId: 'nodejs-client',
  connectTimeout: 5000,
  hostname: '192.168.1.14',
  username: 'cedalo',
  password: 'KqGXVqdfZ6',
  port: 1883
};

const client = mqtt.connect(options);
client.on('connect', function () {
  client.subscribe('#');
  console.log('client subscribed successfully');
});

client.on('message', function (topic, message) {
  console.log(message.toString());
});
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
