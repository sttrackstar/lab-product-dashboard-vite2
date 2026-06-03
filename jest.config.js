module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
}
const { JSDOM } = require('jsdom')
const dom = new JSDOM()
global.window = dom.window
global.document = dom.window.document
global.navigator = {
  userAgent: 'node.js',
}