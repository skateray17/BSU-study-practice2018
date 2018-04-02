function sendHash(e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/account/resetpassword');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      if (response.success) {
        require('./logonRedirects').redirectToResetPassword(e);
      }
    }
  };
  xhr.send(`email=${document.querySelector('.logonEmail').value}`);
}

function resetPassword(e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/account/resetpasswordfinal');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      if (response.success) {
        require('./logonRedirects').redirectToLogin(e);
      }
    }
  };
  xhr.send(`email=${document.querySelector('.logonEmail').value}&newPassword=${
    document.querySelector('.logonPassword').value}&newPasswordConfirm=${
    document.querySelectorAll('.logonPassword')[1].value}&passwordResetHash=${
    document.querySelectorAll('.logonEmail')[1].value}`);
}

module.exports = {
  sendHash,
  resetPassword,
};
