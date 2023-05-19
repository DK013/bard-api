const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your CommonJS module entry file
  mode: 'production', // Mode (development | production)
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.web.js', // Output filename
    libraryTarget: 'umd', // Universal Module Definition (UMD) format
    globalObject: 'this', // Set the global object for the UMD target
  },
  target: 'web',
  resolve: {
    extensions: ['.js'],
  },
};