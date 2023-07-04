const path = require('path');

module.exports = {
  // ...other webpack configuration options...

  resolve: {
    fallback: {
      os: require.resolve('os-browserify/browser'),
      path: require.resolve("path-browserify")
    },
  },
};