import { resolve } from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./main.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader执行的顺序是从后往前（css-loader先读取css文件，然后通过style-loader将css注入到html中）
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

export default config;
