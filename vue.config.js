const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  //开启代理服务器
  //方式一
  /* devServer:{
    // proxy: 'http://localhost:5000'//
  } */
  //方式二
  /* devServer: {
    proxy:{
      '/jiang':{
        target:'http://localhost:5000',
        pathRewrite:{'^/jiang':''},//重写路径
        ws:true,//用于支持websocket
        changeOrigin:true//用于控制请求头中的host值//来源是否更改
      },
      '/qiu':{
        target:'http://localhost:5001',
        pathRewrite:{'^/qiu':''}
      }
    }
  } */
})
