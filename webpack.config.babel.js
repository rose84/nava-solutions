import path from "path";

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: [
    "./assets/js/import-lazyload.js",
  ],
  output: {
    path: path.resolve(__dirname, "assets", "js"),
    filename: "lazy.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}