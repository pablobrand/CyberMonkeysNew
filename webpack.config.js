module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|mp4|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
}
