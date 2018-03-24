const registerHTML = require('../components/register');
const register = require('./register');
const logon = require('./logon');
const logonHTML = require('../components/logon');

function redirectToRegister(e){
  e.preventDefault();
  document.getElementById('body').innerHTML = registerHTML();
  document.querySelector('.inputForm').addEventListener('submit', register);
  document.querySelector('.reditToLogon').addEventListener('click', redirectToLogin);
}


function redirectToLogin(e){
  e.preventDefault();
  document.getElementById('body').innerHTML = logonHTML();
  document.querySelector('.inputForm').addEventListener('submit', logon);
  document.querySelector('.signUpOfferLink').addEventListener('click', redirectToRegister);
}

module.exports = {
  redirectToLogin,
  redirectToRegister
};
