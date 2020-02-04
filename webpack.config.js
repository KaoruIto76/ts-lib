const path = require('path');

module.exports = {

  mode: 'development', // "production" | "development" | "none"

  entry: './src/index.ts',

  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  resolve: {
    modules: [
      "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
      '.ts',
      '.js' // node_modulesのライブラリ読み込みに必要
    ]
  }
};
