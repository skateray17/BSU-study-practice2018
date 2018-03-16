const headerContentFooterHTML = require('../components/headerAndFooter');
const showPosts = require('./showPosts');

module.exports = function(filter = {}){
  console.log(filter);
  document.getElementById('body').innerHTML = headerContentFooterHTML();
  showPosts(filter);
};
