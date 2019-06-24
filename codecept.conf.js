exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true      
    }
  },
  include: {    
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-ionic'
}