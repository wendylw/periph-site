import { defineConfig } from "@tarojs/cli";
import path from "path";

import devConfig from "./dev";
import prodConfig from "./prod";

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, {}) => {
  const baseConfig = {
    projectName: "periph-site",
    date: "2025-2-28",
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2,
    },
    sourceRoot: "src",
    outputRoot: "dist",
    plugins: [],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {},
    },
    framework: "react",
    compiler: "webpack5",
    cache: {
      enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: true, // 启用 CSS Modules
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]", // 自定义类名格式
          },
        },
      },
      webpackChain(chain) {
        // 添加别名
        chain.resolve.alias.set(
          "@common",
          path.resolve(__dirname, "..", "src/common"),
        );
        // 配置 SCSS 规则
        chain.module
          .rule("scss")
          .test(/\.scss$/)
          .exclude.add(/\.module\.scss$/) // 排除 .module.scss 文件
          .end()
          .use("style-loader")
          .loader("style-loader")
          .end()
          .use("css-loader")
          .loader("css-loader")
          .end()
          .use("sass-loader")
          .loader("sass-loader")
          .end();

        // 配置 CSS Modules 规则
        chain.module
          .rule("scss")
          .test(/\.module\.scss$/) // 匹配 .module.scss 文件
          .use("style-loader")
          .loader("style-loader")
          .end()
          .use("css-loader")
          .loader("css-loader")
          .options({
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]", // 自定义类名格式
            },
          })
          .end()
          .use("sass-loader")
          .loader("sass-loader")
          .end();
      },
    },
    h5: {
      publicPath: "/",
      staticDirectory: "static",
      output: {
        filename: "js/[name].[hash:8].js",
        chunkFilename: "js/[name].[chunkhash:8].js",
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[name].[chunkhash].css",
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: true, // 启用 CSS Modules
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]", // 自定义类名格式
          },
        },
      },
      webpackChain(chain) {
        // 添加别名
        chain.resolve.alias.set(
          "@common",
          path.resolve(__dirname, "..", "src/common"),
        );
        // 配置 SCSS 规则
        chain.module
          .rule("scss")
          .test(/\.scss$/)
          .exclude.add(/\.module\.scss$/) // 排除 .module.scss 文件
          .end()
          .use("style-loader")
          .loader("style-loader")
          .end()
          .use("css-loader")
          .loader("css-loader")
          .end()
          .use("sass-loader")
          .loader("sass-loader")
          .end();

        // 配置 CSS Modules 规则
        chain.module
          .rule("scss")
          .test(/\.module\.scss$/) // 匹配 .module.scss 文件
          .use("style-loader")
          .loader("style-loader")
          .end()
          .use("css-loader")
          .loader("css-loader")
          .options({
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]", // 自定义类名格式
            },
          })
          .end()
          .use("sass-loader")
          .loader("sass-loader")
          .end();
      },
    },
    rn: {
      appName: "taroDemo",
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        },
      },
    },
  };

  process.env.BROWSERSLIST_ENV = process.env.NODE_ENV;

  if (process.env.NODE_ENV === "development") {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig);
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig);
});
