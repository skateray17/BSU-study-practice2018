module.exports = {
  entry: './UI/js/index.js',
  output: {
    filename: 'build.js',
    path: __dirname + '/UI/js/',
    library: 'skatLib',
  },
  mode: 'production',
};
