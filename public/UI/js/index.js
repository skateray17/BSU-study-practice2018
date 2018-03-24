const showMainPage = require('./api/showListOfPosts');
const initLocalStorage = require('./api/localStorage');

if(!window.localStorage.posts || !window.localStorage.passwordsHashs){
  console.log(3);
  initLocalStorage();
}

showMainPage();
