module.exports = function(e){
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/account/logoff');
  xhr.onload = () => {
    if (xhr.status === 200 && JSON.parse(xhr.response).success) {
      require('../posts').deleteUser();
      require('./showListOfPosts')();
    }
  };
  xhr.send();
};
