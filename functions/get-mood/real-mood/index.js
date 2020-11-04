const mysql = require('mysql');

module.exports.getMood = (logger) => {
  const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    user: 'test-read',
    password: 'xnxPp6QfZbCYkY8',
    database: 'birdietest',
  });

  return new Promise(((resolve, reject) => {
    // not sure what the where clause would be
    // is the "mood" static or free text?
    pool.query('SELECT * FROM birdietest.events', (err, results) => {
      if (err) {
        logger.error(err);
        return reject(err);
      }
      const action = results === null ? 'warn' : 'info';
      logger[action]({
        message: `mysql:${results === null ? 'null' : 'success'}`,
      });
      return resolve(results);
    });
  }));
};
