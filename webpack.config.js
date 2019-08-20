const path = require('path')
// 启用热更新   第 2 步 导入webpack
const webpack = require('webpack')

// 导入在内存中生成 HTML 页面的插件
// 只要是插件，都要放到plugins节点中去
// 该插件作用:
//     1. 自动在内存中根据指定页面生成一个内存的页面
//     2. 自动把打包好的bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件其实就是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象,当以命令形式运行webpack或 
// webpack-dev-server时，工具会发现并无提供要打包文件的出口入口文件，此时他会检查项目根目录中的配置文件，并读取这个文件，
// 以拿到导出的这个配置对象，由此对象进行打包构建。

const VueLoaderPlugin = require('vue-loader/lib/plugin')   
module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口，表示要使用webpack 打包哪个文件
  output: { // 输出相关配置
    path: path.join(__dirname, './dist'), // 指定打包好的文件输出到哪个目录中去
    filename: 'bundle.js', // 指定输出文件的 名称
  },
  devServer: { // 将package.json中配置dev-server命令参数变换形式  (--open --port 3000 --contentBase src --hot) 
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时运行端口
    contentBase: 'src', // 指定托管的根目录
    hot: true // 启用热更新   第 1 步
  },
  plugins: [ // 配置插件的节点
    // 启用热更新   第 3 步
    new webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块对象 
    new htmlWebpackPlugin({
      // 创建一个在内存中生成 HTML 页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: 'index.html' // 指定生成页面的名称 
    }),
    new VueLoaderPlugin()   // 请确保引入这个插件来施展魔法
  ],
  module: { //  此节点用于配置所有第三方模块加载器
    rules: [ // 所有第三方模块的匹配规则
      {
        test:/\.css$/, use:['style-loader','css-loader']   // 匹配处理.css文件的第三方loader规则
        // 调用顺序为 右 ---> 左 , 将css-loader处理结果给style-loader作进一步处理.
      },
      {
        test:/\.less$/, use:['style-loader','css-loader', 'less-loader']   // 匹配处理.less文件的第三方loader规则
      },
      {
        test:/\.scss$/,use:['style-loader','css-loader','sass-loader']   // 匹配处理.scss文件的第三方loader规则
      },
      {
        test:/\.(jpg|png|jpeg|gif|bmp)$/, use:'url-loader?limit=6748&name=[hash:8]-[name].[ext]'    // 处理图片路径  loader
        //  loader?   传参格式 
        //  &name=[hash:8]-[name].[ext]  截取hash值得前8位，原名输出
        //  limit是图片的大小，单位是byte，若引用的图片大于或等于给定的limit值，则不会被转为base64格式的字符串，
        //  若小于给定limit值，则会被转为base64字符串
      },
      {
        test:/\.(ttf|svg|eot|woff|woff2)/, use:'url-loader'    // 处理字体文件 loader
      },
      {
        test:/\.js$/,use:'babel-loader', exclude:/node_modules/   // 配置babel来转换高级的ES语法
      },
      {
        test:/\.vue$/, use:'vue-loader'    // 处理.vue文件的loader
      }
    ]

  },
  resolve:{
    alias:{  // 修改vue被导入时包的路径
      // "vue$" : "vue/dist/vue.js"     
    }
  }
}


// 在控制终端输入 webpack时， webpack做了一下几步：
// 1. webpack发现没有通过命令的形式去指定入口和出口
// 2. webpack就回去项目的根目录中查找名为 'webpack.config.js' 的文件
// 3. 当找到配置文件后，webpack会解析该配置文件，当解析执行完配置文件，就得到配置文件中导出的配置对象
// 4. 当webpack得到配置对象,就拿到了配置对象中指定的入口和出口然后进行打包构建