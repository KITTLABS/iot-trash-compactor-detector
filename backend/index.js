const app = require('./app');
const config = require('./config/trashconfig.json');
const logger = require('./helpers/logger');

app.listen(config.port, function () {
  logger.info('app started running on ENV: ' + config.env);
  logger.info('app running on PORT: ' + config.port);
});
