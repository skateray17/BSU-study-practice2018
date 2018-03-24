
/**
 * @description signUp and restoring password will be done after connecting express+mongoDB
 */
module.exports = function(){
  return `<div class="logonBackground">
      <div class="logonDiv">
        <b class="signIn">Sign in</b>
        <img class="logonLogo" src="https://uc.uxpin.com/files/839015/832598/image-612fd1.png">
        <form class="inputForm">
          <input class="logonEmail" type="email" placeholder="Email address" required>
          <input class="logonPassword" type="password" placeholder="Password" required>
          <input class="logonButton" type="submit" value="Logon">
        </form>  
        <a href="#">Forgot your password?</a>
      </div>
      <div class="signUpOffer">
        <span>Don't have an account?</span>
        <a class="signUpOfferLink" href="#">Signup</a>
      </div>
    </div>`;
};
