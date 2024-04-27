import { resolve } from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  // 开启sourcemap，定位源码进行调试
  devtool: "inline-source-map",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader执行的顺序是从后往前（css-loader先读取css文件，然后通过style-loader将css注入到html中）
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
        ],
      },
      {
        // 处理ts文件
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};

export default config;
