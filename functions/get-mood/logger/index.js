const EXIT = 'EXIT';
const INFO = 'INFO';
const WARN = 'WARN';
const DEBUG = 'DEBUG';
const ERROR = 'ERROR';

const { Logger, payloadBuilder } = require('./Logger');

class LoggableError extends Error {
  constructor({ statusCode, data, message }) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LoggableError);
    }
    this.statusCode = statusCode;
    this.name = 'LoggableError';
    this.data = data;
    this.message = message;
  }

  get errorData() {
    return JSON.stringify({
      message: this.message,
      data: this.data,
      statusCode: this.statusCode,
    });
  }
}

module.exports.LoggableError = LoggableError;

module.exports.buildLogger = () => {
  const logger = Logger();

  return {
    info: (logData = {}) => {
      const payload = payloadBuilder(logData);
      logger.log(INFO, payload.log);
    },

    warn: (logData = {}) => {
      const payload = payloadBuilder(logData);
      logger.log(WARN, payload.log);
    },

    debug: (logData = {}) => {
      const payload = payloadBuilder(logData);
      logger.log(DEBUG, payload.log);
    },

    error: (logData = {}) => {
      const payload = payloadBuilder(logData);
      logger.log(ERROR, payload.error);
    },

    exit: (logData = {}) => {
      const payload = payloadBuilder(logData);
      logger.log(EXIT, payload.log);
    },
  };
};
