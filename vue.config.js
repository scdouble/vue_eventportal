module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
    },
  },
  // proxyサーバーを起動する（方法１）
  //   devServer: {
  //     proxy: "http://localhost:5000",
  //   },
  lintOnSave: false,
  // proxyサーバーを起動する（方法2）
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5000",
  //       pathRewrite: { "^/api": "" },
  //       ws: true, //websocket サポート
  //       changeOrigin: true, // RequestのHostの値
  //     },
  //     "/demo": {
  //       target: "http://localhost:5001",
  //       pathRewrite: { "^/demo": "" },
  //       ws: true, //websocket サポート
  //       changeOrigin: true, // RequestのHostの値
  //     },
  //   },
  // },
};
