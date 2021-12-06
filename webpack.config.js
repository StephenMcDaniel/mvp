const path = require('path');

const SRC_DIR = path.join(__dirname, 'CLIENT', 'SRC');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};









// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: '/Users/stephen/Desktop/hackreactor/immersive/mvp/mvp/SRC/index.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public'),
//   },



//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)?/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env',"@babel/preset-react"],
//             plugins: [
//               ["@babel/plugin-transform-runtime",
//                 {
//                   "regenerator": true
//                 }
//               ]
//             ]
//           }
//         }
//       }
//     ]
//   }




// };
