const headerContentFooterHTML = require('../components/headerAndFooter');
const showPosts = require('./showPosts');
const filtering = require('./filter');
const { createPostPlace } = require('./postsEditing');
const logoff = require('./logoff');
const { redirectToLogin } = require('./logonRedirects');

module.exports = function (filter = {}) {
  document.getElementById('body').innerHTML = headerContentFooterHTML();
  document.querySelector('.search').addEventListener('submit', filtering);
  const addPostButton = document.querySelector('.postCreateButton');
  if (addPostButton) {
    addPostButton.addEventListener('click', createPostPlace);
  }
  const button = document.querySelector('.editDeleteMenuItem');
  if (button.innerHTML === 'Logout') {
    button.addEventListener('click', logoff);
  } else {
    button.addEventListener('click', redirectToLogin);
  }
  showPosts(filter);
};
