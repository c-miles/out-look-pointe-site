const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // No source maps in production: this is a static marketing site, nothing debugs
  // against prod, and the vendor map alone was 635 KB of dead weight.
  productionSourceMap: false,
  css: {
    loaderOptions: {
      css: {
        // Fonts live in public/ and are served from a stable, preloadable path.
        // Without this, css-loader tries to resolve /fonts/... as a module and
        // the build fails.
        url: { filter: (url) => !url.startsWith('/') },
      },
    },
  }
})
