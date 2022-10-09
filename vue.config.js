const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
<<<<<<< HEAD
    ? '/gitogram2/dist/'
=======
    ? '/gitogram/dist/'
>>>>>>> master
    : '/'
})
