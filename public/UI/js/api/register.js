const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

module.exports = function() {
  const hashs = JSON.parse(window.localStorage.passwordsHashs);
  const [ email, nick ] = document.getElementsByClassName('logonEmail');
  const [ password, passwordConfirm ] = document.getElementsByClassName('logonPassword');
  if(!email.value){
    return console.log('enter email');
  }
  if(hashs[email.value]){
    return console.log('email already exists');
  }
  for(let val in hashs){
    if(hashs[val].nick === nick.value){
      return console.log('nickname already exists');
    }
  }
  if(password.value !== passwordConfirm.value){
    return console.log('Passwords mismatch');
  }
  const salt = uuidv4();
  hashs[email.value] = {
    nick: nick.value,
    salt,
    hash: crypto.pbkdf2Sync(password.value, salt, 1000, 64, 'sha512').toString('hex'),
  };
  window.localStorage.setItem('passwordsHashs', JSON.stringify(hashs));
  window.localStorage.setItem('user', JSON.stringify(nick.value));
  require('./showListOfPosts')();
};
