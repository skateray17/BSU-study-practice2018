module.exports = function(){
  return `<div class="logonBackground">
      <div class="logonDiv">
        <b class="signIn">Reset password</b>
        <img class="logonLogo" src="https://uc.uxpin.com/files/839015/832598/image-612fd1.png">
        <form class="inputForm">
          <input class="logonEmail" type="email" placeholder="Email address" required>
          <input class="logonEmail" placeholder="Reset hash" required>
          <input class="logonPassword" placeholder="New password" required>
          <input class="logonPassword" placeholder="new password confirm" required>
          <input class="logonButton" type="submit" value="Send reset hash">
        </form>
        <a href="#" class="redirectToLogon">Remember your password?</a>
      </div>
      <a class="signUpOfferLink" href="#">Don't have hash?</a>
    </div>`;
};
