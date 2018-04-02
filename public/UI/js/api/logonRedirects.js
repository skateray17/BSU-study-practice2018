const registerHTML = require('../components/register');
const register = require('./register');
const logon = require('./logon');
const logonHTML = require('../components/logon');
const restoreHTML = require('../components/restorePassword');
const finalHTML = require('../components/restorePasswordFinal');
const { sendHash, resetPassword } = require('./resetPassword');

function redirectToRegister(e){
  e.preventDefault();
  document.getElementById('body').innerHTML = registerHTML();
  document.querySelector('.inputForm').addEventListener('submit', register);
  document.querySelector('.redirectToLogon').addEventListener('click', redirectToLogin);
}


function redirectToLogin(e){
  e.preventDefault();
  document.getElementById('body').innerHTML = logonHTML();
  document.querySelector('.inputForm').addEventListener('submit', logon);
  document.querySelector('.reset-pwd').addEventListener('click', redirectToSendResetHash);
  document.querySelector('.signUpOfferLink').addEventListener('click', redirectToRegister);
}

function redirectToSendResetHash(e){
  e.preventDefault();
  document.querySelector('body').innerHTML = restoreHTML();
  document.querySelector('.redirectToLogon').addEventListener('click', redirectToLogin);
  document.querySelector('.inputForm').addEventListener('submit', sendHash);
  document.querySelector('.signUpOfferLink').addEventListener('click', redirectToResetPassword);
}

function redirectToResetPassword(e){
  e.preventDefault();
  document.querySelector('body').innerHTML = finalHTML();
  document.querySelector('.redirectToLogon').addEventListener('click', redirectToLogin);
  document.querySelector('.inputForm').addEventListener('submit', resetPassword);
  document.querySelector('.signUpOfferLink').addEventListener('click', redirectToSendResetHash);
}

module.exports = {
  redirectToLogin,
  redirectToRegister,
  redirectToSendResetHash,
  redirectToResetPassword,
};
