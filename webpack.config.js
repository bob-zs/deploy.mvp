const path = require("path");
const JavaScriptObfuscator = require("webpack-obfuscator");

module.exports = (_env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      ...(isProduction
        ? [
            new JavaScriptObfuscator({
              compact: true,
              controlFlowFlattening: true,
            }),
          ]
        : []),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
  };
};
