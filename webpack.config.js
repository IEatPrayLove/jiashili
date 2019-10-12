var path = require("path");
module.exports = {
  // entry: ["./src/main.js"], // 入口
  // output: { // 出口 
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "js/[name].[hash:8].js", // hash:8 加密得到 长度 8的字符串 阻止文件缓存 
  //   publicPath: "", // 文件的公共路径
  // },
  // module: {
  //   rules: [{
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: ["babel-loader"]
  //     },
  //     {
  //       test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
  //       // use:["url-loader?limit=8192&name=imgs/[name].[hash:8].[ext]"]
  //       use: [{
  //         loader: "url-loader",
  //         options: {
  //           limit: 8192,
  //           name: "imgs/[name].[hash:8].[ext]"
  //         }
  //       }]
  //     },
  //     {
  //       test: /\.(css|scss)/,
  //       use: extractTextPlugin.extract({
  //         fallback: "style-loader", //  把 node字符串代码转为 style 节点 
  //         use: [
  //           "css-loader", // 转换为 commonJS 规范的模块 
  //           {
  //             loader: "postcss-loader", // css 代码转化 
  //             options: {
  //               plugins: function () {
  //                 return [
  //                   require("cssgrace"), // 代码美化 
  //                   require("autoprefixer"), // 自动补全 
  //                   require("postcss-px2rem-exclude")({
  //                     remUnit: 100, // 200px / 100  = 2rem
  //                     exclude: /antd-mobile/i // 排除UI库适配 
  //                   })
  //                 ]
  //               }
  //             }
  //           },
  //           "sass-loader"
  //         ]
  //       })
  //     },
  //     {
  //       test: /\.(css|less)/,
  //       use: extractTextPlugin.extract({
  //         fallback: "style-loader", //  把 node字符串代码转为 style 节点 
  //         use: [
  //           "css-loader", // 转换为 commonJS 规范的模块 
  //           {
  //             loader: "postcss-loader", // css 代码转化 
  //             options: {
  //               plugins: function () {
  //                 return [
  //                   require("cssgrace"), // 代码美化 
  //                   require("autoprefixer"), // 自动补全 
  //                   require("postcss-px2rem-exclude")({
  //                     // remUnit:100,   // 200px / 100  = 2rem
  //                     exclude: /antd-mobile/i // 排除UI库适配 
  //                   })
  //                 ]
  //               }
  //             }
  //           },
  //           "less-loader"
  //         ]
  //       })
  //     }
  //   ]
  // },
}
