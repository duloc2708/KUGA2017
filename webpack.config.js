var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ],
  resolve: {
    root: __dirname,
    alias: {
      HomePage: 'app/components/HomePage.js',
      Account: 'app/components/Account.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Carousel: 'app/components/Carousel.js',
      Transaction: 'app/components/Transaction.js',
      SignIn: 'app/components/SignIn.js',
      AccountInfo: 'app/components/AccountInfo.js',
      Notification: 'app/components/Notification.js',
      Cuoisml: 'app/components/cuoisml.html',
      NavBar: 'app/components/NavBar.js',
      ListPost: 'app/components/ListPost.js',
      ItemPost: 'app/components/ItemPost.js',
      PageWrapper: 'app/components/PageWrapper.js',
      PageRight: 'app/components/PageRight.js',
      Listdata: 'app/components/Listdata.js',
      Redux:  'app/components/Redux.js',
      ConfigurableExample:  'app/components/ConfigurableExample.js',
      Test2:'app/components/Test2.js',
      ItemDetail:'app/components/ItemDetail.js',
      Content:'app/components/Content.js',
      DataArticles:'app/Data/DataArticles.js',
    }
  },
  module: {
    loaders: [
      {
        loader: ['babel-loader'],
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.html|\.js|\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
