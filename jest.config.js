module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'vue'],
    testPathIgnorePatterns: [
      '/node_modules/',
      '<rootDir>/dist/',
      '<rootDir>/tests/__tests__/components/'
    ],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    setupFilesAfterEnv: ['@testing-library/vue/cleanup-after-each'],
  }
