// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/main.js", // Archivo de entrada principal
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Para archivos CSS
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/, // Para archivos JS
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development",
};
