const { pbkdf2Sync } = require('crypto');

module.exports = function(e){
  e.preventDefault();
  const email = document.getElementsByClassName('logonEmail')[0].value;
  const password = document.getElementsByClassName('logonPassword')[0].value;
  const passwordsHashs = JSON.parse(window.localStorage.getItem('passwordsHashs'));
  if(passwordsHashs[email]) {
    const hash = pbkdf2Sync(password, passwordsHashs[email].salt, 1000, 64, 'sha512').toString('hex');
    if(hash !== passwordsHashs[email].hash){
      console.log('Wrong password');
    } else {
      window.localStorage.setItem('user', JSON.stringify(passwordsHashs[email].nick));
      require('./showListOfPosts')();
    }
  } else {
    console.log('user doesn\'t exists');
  }
};
