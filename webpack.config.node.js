const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your CommonJS module entry file
  mode: 'production', // Mode (development | production)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.node.js', // Output filename for Node.js
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
};