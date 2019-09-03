
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/server/**/*.ts',
    '!<rootDir>/**/*{stub,mocks,index,test,main}.ts'
  ],
  coverageReporters: [
    'lcov',
    'text'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest'
  }
}
