const { addPost, addPosts, removePhotoPost, deleteEl, editPhotoPost } = require('./posts');
const logonHTML = require('./components/logon');
const showMainPage = require('./api/showListOfPosts');
const logon = require('./api/logon');
const logoff = require('./api/logoff');
const registerHTML = require('./components/register');
const initLocalStorage = require('./api/localStorage');
const register = require('./api/register');
const filter = require('./api/filter');
const createPostPlace = require('./api/postsEditing');

function redirectToLogin(e){
  e.preventDefault();
  document.getElementById('body').innerHTML = logonHTML();
}

function redirectToRegister(e){
  e.preventDefault();
  document.getElementById('body').innerHTML = registerHTML();
}

if(!window.localStorage.posts || !window.localStorage.passwordsHashs){
  initLocalStorage();
}

showMainPage();

module.exports = {
  addPosts,
  addPost,
  editPhotoPost,
  removePhotoPost,
  deleteEl,
  redirectToLogin,
  logon,
  logoff,
  redirectToRegister,
  register,
  filter,
  createPostPlace,
};
