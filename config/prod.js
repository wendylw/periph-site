export default {
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 启用 CSS Modules
        config: {
          namingPattern: "module", // 类名生成规则
          generateScopedName: "[name]__[local]___[hash:base64:5]", // 自定义类名格式
        },
      },
    },
    webpackChain(chain) {
      // 配置 Tailwind CSS
      chain.module
        .rule("scss")
        .test(/\.scss$/)
        .use("postcss-loader")
        .loader("postcss-loader")
        .options({
          postcssOptions: {
            plugins: [
              require("tailwindcss")({
                config: require.resolve("../tailwind.config.js"), // 指定 Tailwind 配置文件路径
              }),
              require("autoprefixer"),
            ],
          },
        })
        .end()
        .use("sass-loader")
        .loader("sass-loader")
        .end();
    },
  },
  h5: {
    compile: {
      include: [
        // 确保产物为 es5
        (filename) =>
          /node_modules\/(?!(@babel|core-js|style-loader|css-loader|react|react-dom))/.test(
            filename
          ),
      ],
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 启用 CSS Modules
        config: {
          namingPattern: "module", // 类名生成规则
          generateScopedName: "[name]__[local]___[hash:base64:5]", // 自定义类名格式
        },
      },
    },
    webpackChain(chain) {
      // 配置 Tailwind CSS
      chain.module
        .rule("scss")
        .test(/\.scss$/)
        .use("postcss-loader")
        .loader("postcss-loader")
        .options({
          postcssOptions: {
            plugins: [
              require("tailwindcss")({
                config: require.resolve("../tailwind.config.js"), // 指定 Tailwind 配置文件路径
              }),
              require("autoprefixer"),
            ],
          },
        })
        .end()
        .use("sass-loader")
        .loader("sass-loader")
        .end();

      // 启用 webpack-bundle-analyzer（可选）
      // chain.plugin('analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);

      // 启用 prerender-spa-plugin（可选）
      // const path = require('path');
      // const Prerender = require('prerender-spa-plugin');
      // const staticDir = path.join(__dirname, '..', 'dist');
      // chain
      //   .plugin('prerender')
      //   .use(new Prerender({
      //     staticDir,
      //     routes: ['/pages/index/index'],
      //     postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') }),
      //   }));
    },
  },
  cache: {
    enable: true, // 启用持久化缓存
  },
  esbuild: {
    logOverride: { "empty-glob": "silent" }, // 忽略 empty-glob 警告
  },
};
