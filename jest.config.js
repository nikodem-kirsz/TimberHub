module.exports = {
    // Other Jest configurations...
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '\\.(svg)$': 'jest-transform-stub',
    },
  };