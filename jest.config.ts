module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    globalSetup: "./test/setup.ts",
    globalTeardown: "./test/teardown.ts",
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/src/$1'
    },
    testPathIgnorePatterns: ['dist/']
  };