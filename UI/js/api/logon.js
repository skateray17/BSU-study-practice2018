// const crypto = require('crypto');
const { pbkdf2Sync } = require('crypto');
// const uuidv4 = require('uuid/v4');
// const passwordsHashs = require('../../resources/passwordHashs.json');
const showMainPage = require('./showListOfPosts');

// function addUser(email, password){
//   const salt = uuidv4();
//   const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
//   passwordsHashs[email] = {
//     salt,
//     hash,
//   };
//   console.log(passwordsHashs[email].salt, passwordsHashs[email].hash);
// }
//There are some passwords for checks ;)
// addUser('skateray17@gmail.com', '1234567');
// addUser('notesapptask@gmail.com', '123');
// addUser('shchaurouski.slava@gmail.com', 'perfect');
// addUser('toxa.z@mail.ru', 'coolstorybob');

// console.log(JSON.stringify(passwordsHashs));

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
      showMainPage();
    }
  } else {
    console.log('user doesn\'t exists');
  }
};
