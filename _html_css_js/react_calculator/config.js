//to run all applications type in console
//node config.js

require('babel-register')({
    presets: [ 'env' ]
})
// Import the rest of our application.
module.exports = require('./src/scripts/stringToTokens.test.js')