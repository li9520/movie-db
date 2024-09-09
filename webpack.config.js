const path = require('path');
const webpack = require('webpack');

const commonConfig = (options) => ({
  mode: options.mode,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
})

module.exports = (env) => {
  const mode = env.mode || 'development';
  const clientConfig = {
    ...commonConfig({mode}),
    entry: path.resolve(__dirname, './src', 'index.jsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    }
  };

  const serverConfig = {
    ...commonConfig({mode}),
    target: 'node', 
    entry: path.resolve(__dirname, './src', 'server.js'),
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'build'),
    }
  }
  
  return([
    clientConfig,
    serverConfig
  ]);
};