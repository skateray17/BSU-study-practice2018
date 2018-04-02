module.exports = {
  entry: './public/UI/js/index.js',
  output: {
    filename: 'build.js',
    path: __dirname + '/public/UI/js/',
    library: 'skatLib',
  },
  mode: 'production',
};
