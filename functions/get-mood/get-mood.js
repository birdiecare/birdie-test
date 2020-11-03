const { buildLogger } = require('./logger');
const { getMood } = require('./fake-mood');

const headers = {};

exports.handler = async (event, context, callback) => {
  const logger = buildLogger({ event, context });

  try {
    const mood = await getMood(logger);
    logger.exit({
      function: 'get-mood:sucess',
      statusCode: 200,
      data: { mood },
    });

    return callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({ mood }),
    });
  } catch (err) {
    const { statusCode = 500, message } = err;

    logger.error({
      function: 'get-mood:error',
      statusCode,
      data: { message },
    });

    return callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ message }),
    });
  }
};
