const {
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
} = require("@stylable/webpack-plugin");

/*
 * single optimizer for NextJS multiple builds
 * in order to sync client/server namespaces
 */
const StylableOptimizer = require("@stylable/optimizer").StylableOptimizer;
const stylableOptimizer = new StylableOptimizer();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config) => {
    /* exclude Stylable files from all other loaders */
    applyWebpackConfigStylableExcludes(config);

    /* add the Stylable plugin to the webpack configuration */
    config.plugins.push(
      new StylableWebpackPlugin({
        /* let NextJS handle assets */
        filterAssets: () => false,

        /* output CSS to the correct location */
        filename: "static/css/stylable.[contenthash].css",

        /* a shared optimizer instance */
        optimizer: stylableOptimizer,

        stcConfig: true,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
