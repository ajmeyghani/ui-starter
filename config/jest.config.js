module.exports = {
  "verbose": true,
  "rootDir": "../",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/config/jest.transform.js",
  },
  // 'setupFilesAfterEnv': ['<rootDir>/config/test.configure.js'],
  "moduleNameMapper": {
    "\\.css$": "identity-obj-proxy",
    // eslint-disable-next-line max-len
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
  },
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/src/index.js",
    "!**/*.test.js",
  ],
  "coverageReporters": [
    "text-summary", "html",
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "modulePaths": ["src"],
  "modulePathIgnorePatterns": [
    "<rootDir>/node_modules/.*",
    "<rootDir>/cypress/.*",
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/.*",
    "<rootDir>/cypress/.*",
  ],
  "testMatch": ["<rootDir>/src/**/?(*.)(test).{js,jsx,mjs}"],
};
