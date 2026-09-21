const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // No source maps in prod.
  productionSourceMap: false,
  css: {
    loaderOptions: {
      css: {
        // Fonts are served from public/. Without this, css-loader tries to
        // resolve /fonts/... and the build fails.
        url: { filter: (url) => !url.startsWith('/') },
      },
    },
  }
})
