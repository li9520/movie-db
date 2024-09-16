import path from 'path';
import webpack from 'webpack';

type BuildMode = 'production' | 'development';

type BuildEnv = {
  mode: BuildMode;
}

type BuildOptions = {
  mode: BuildMode;
}

const commonConfig = (options: BuildOptions) => ({
  mode: options.mode,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
                exportLocalsConvention: 'camel-case',
              },
            },
          }
      ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})

const config = (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const clientConfig: webpack.Configuration = {
    ...commonConfig({mode}),
    entry: path.resolve(__dirname, './src', 'index.tsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    }
  };

  const serverConfig: webpack.Configuration = {
    ...commonConfig({mode}),
    target: 'node', 
    entry: path.resolve(__dirname, './src', 'server.tsx'),
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

export default config;