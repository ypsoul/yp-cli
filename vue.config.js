const path = require("path")

const webpack = require('webpack')

const uglifyJsPlugin = require("uglifyjs-webpack-plugin")

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const IsProduction = process.env.NODE_ENV === "production";

// 引入文件
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "./",

  // 输出文件目录
  outputDir: "dist",

  // eslint-loader 在保存的时候校验
  lintOnSave: true,

  devServer: {
    compress: false, // 是否压缩
    open: true, // 启动默认打开浏览器
    proxy: {
      "/api": {
        target: "http://www.xxx.com",
        ws: true, // websocket
        changeOrigin: true,
        pathRewrite: {
          "/api": "/"
        }
      }
    },
  },
  // css相关配置
  css: {
    extract: true, // css分离插件 自带
    sourceMap: false, // 方便开发 错误定位
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/common/reset.scss";`
      }
    },
    modules: false // 是否启用css-moudle
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/img"))
      .set("@api", resolve("src/api/api"));
    if (IsProduction) {
      // 删除预加载
      config.plugins.delete("preload");
      // 开启代码压缩
      config.optimization.minimize(true);
      // 分割代码 相同代码放一块
      config.optimization.splitChunks({
        chunks: "all"
      });
    }
    // 开发环境
  },
  configureWebpack: config => {
    config.plugins.push(
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
      }),
      // 将 dll 注入到 生成的 html 模板中
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        // dll 引用路径
        publicPath: './vendor',
        // dll最终输出的目录
        outputPath: './vendor'
      })
    )
    if (IsProduction) {
      config.plugins.push(
        new uglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true
            },
            sourceMap: false,
            // 多进程
            parallel: true
          }
        })
      );
    } else {
      // 开发环境 
    }
  },

  productionSourceMap: false,
  // 启动并行化 默认 ("os").cpus().length-1
  parallel: require("os").cpus().length > 1,
}