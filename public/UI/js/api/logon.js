module.exports = function(e){
  e.preventDefault();
  const email = document.getElementsByClassName('logonEmail')[0].value;
  const password = document.getElementsByClassName('logonPassword')[0].value;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/account/logon');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200 && JSON.parse(xhr.response).success) {
      require('../posts').setUser(JSON.parse(xhr.response).extras.userProfileModel.nickname);
      require('./showListOfPosts')();
    }
  };
  xhr.send(`email=${email}&password=${password}`);
};
