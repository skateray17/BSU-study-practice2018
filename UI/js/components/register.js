module.exports = function(){
  return `
  <div class="logonBackground">
    <div class="logonDiv">
      <b class="signIn">Sign up</b>
      <img class="logonLogo" src="https://uc.uxpin.com/files/839015/832598/image-612fd1.png">
      <form class="inputForm" onsubmit="skatLib.register(event)">
        <input class="logonEmail" type="email" placeholder="Email address">
        <input class="logonEmail" placeholder="Nickname">
        <input class="logonPassword" type="password" placeholder="Password">
        <input class="logonPassword" type="password" placeholder="Password Confirm">
        <input class="logonButton" type="submit" value="Register">
      </form>  
      <a href="#" onClick="skatLib.redirectToLogin(event)">Already have an account?</a>
    </div>
  </div>`;
};
