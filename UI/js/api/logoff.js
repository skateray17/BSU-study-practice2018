const showMainPage = require('./showListOfPosts');

module.exports = function(e){
  e.preventDefault();
  window.localStorage.setItem('user', JSON.stringify(null));
  showMainPage();
};
