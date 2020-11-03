/* eslint-disable  */
module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocessor.js',
  },
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^contexts(.*)$': '<rootDir>/src/contexts$1',
    '^theme(.*)$': '<rootDir>/src/functions$1',
    '^views(.*)$': '<rootDir>/src/views$1',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public', 'cypress'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>./loadershim.js', '<rootDir>./set-up-jest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
