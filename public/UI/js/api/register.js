module.exports = function(e) {
  e.preventDefault();
  const [ email, nick ] = document.getElementsByClassName('logonEmail');
  const [ password, passwordConfirm ] = document.getElementsByClassName('logonPassword');
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/account/register');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200 && JSON.parse(xhr.response).success) {
      require('../posts').setUser(nick.value);
      require('./showListOfPosts')();
    } else {
      console.log(JSON.parse(xhr.response).extras);
    }
  };
  xhr.send(`email=${email.value}&nickname=${nick.value}&password=${password.value}&passwordConfirm=${passwordConfirm.value}`);
};
