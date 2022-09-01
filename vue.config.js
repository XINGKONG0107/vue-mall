module.exports = {
  configureWebpack : {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}


// configureWebpack:{
//   resolve: {
//       // 别名配置
//        alias: {
//          'assets': '@/assets',
//          'common': '@/common',
//          'components': '@/components',
//          'network': '@/network',
//          'configs': '@/configs',
//          'views': '@/views',
//          'plugins': '@/plugins',
//         }
//    }
// },

