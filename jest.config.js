module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/*.spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/app/**/*.ts',
    '!<rootDir>/src/app/**/index.ts',
    '!<rootDir>/src/app/**/*.module.ts'
  ],
  coverageDirectory: 'dist/tests/coverage',
  coverageReporters: ['lcov', 'text-summary', 'json'],
  testPathIgnorePatterns: ['<rootDir>/coverage/', '<rootDir>/dist/', '<rootDir>/e2e/', '<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/src/app/*.spec.ts', '<rootDir>/src/app/**/*.spec.ts'],
  reporters: ['default']
};
