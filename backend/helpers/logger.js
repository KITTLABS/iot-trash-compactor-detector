const { createLogger, transports, format, info } = require('winston');
const { combine, timestamp, label, printf, prettyPrint } = format;
const config = require('../config/trashconfig.json');
let date = new Date();

let dateFormat =
  date.getMonth() + 1 + '_' + date.getDate() + '_' + date.getFullYear();

console.log('Env: ', config.env);
const myFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let msg = `${timestamp} [${level}] : ${message} `;
  if (metadata) {
    msg += JSON.stringify(metadata);
  }
  return msg;
});

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: combine(format.colorize(), timestamp(), myFormat)
    })
  ]
});

module.exports = logger;
