const { DateTime } = require('luxon');

const EXIT = 'EXIT';
const WARN = 'WARN';
const ERROR = 'ERROR';

module.exports.Logger = () => {
  const state = {
    startTime: DateTime.utc(),
  };

  const getDuration = () => {
    const { startTime } = state;
    const timeNow = DateTime.utc();
    const difference = timeNow.diff(startTime);
    const { milliseconds } = difference.toObject();
    return `${milliseconds} milliseconds`;
  };

  return {
    log: (level, log) => {
      switch (level) {
        case EXIT:
          console.log(JSON.stringify({ level, duration: getDuration(), ...log }));
          break;
        case WARN:
          console.warn(JSON.stringify({ level, ...log }));
          break;
        case ERROR:
          console.error(JSON.stringify({ level, ...log }));
          break;
        default:
          console.log(JSON.stringify({ level, ...log }));
      }
    },
  };
};

module.exports.payloadBuilder = (log) => ({
  get log() {
    return { ...log };
  },

  get error() {
    const { stack = '', errorData } = log;

    return {
      errorData,
      stackTrace: stack.replace(/(\r\n|\n|\r)/gm, ''),
    };
  },
});
