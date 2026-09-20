const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // No source maps in production: this is a static marketing site, nothing debugs
  // against prod, and the vendor map alone was 635 KB of dead weight.
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('ion-')
        }
      }))
  }
})
