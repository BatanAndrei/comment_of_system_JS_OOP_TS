const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/scriptEditNew.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "dist"),
        },
        port: 3001,
     /*    stats: {
            children: false,
            modulesSpace: 0,
          } */
      },
}