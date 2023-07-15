/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


module.exports = {
  
  pages: {
    index: {
      entry: "src/pages/index/main.js",
      template: "public/client/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    //portal, portal
    portal: {
      entry: "src/main.js",
      template: "public/index.html",
      title: "Admin",
      chunks: ["chunk-vendors", "chunk-common", "portal"], //portal
    }
  },
  
  productionSourceMap: false,

  //cssSourceMap: false,
  // publicPath: '/',
  // transpileDependencies: [
  //   'vue-echarts',
  //   'resize-detector'
  // ],
  // configureWebpack: {
  //   // optimization: {
  //   //   splitChunks: {
  //   //     chunks: 'all'
  //   //   }
  //   // }
  //   devServer: {
  //     historyApiFallback: true
  //   }
  // }
}
