module.exports = function() {
  return `
    <header class="header flex">
      <div class="headerDiv center flex">
        <a href="#" class="logo flex">
          <img class="logoImage" src="https://uc.uxpin.com/files/839015/832598/image-612fd1.png">
          <div class="verticalLine"></div>
          <p class="appName"><b>Ugagram</b></p>
        </a>
        <form class="search flex">
          <div class="help">You may search for A's and B's post, tagged with #c#d via typing "A B #c#d"</div>
          <input class="filterByTagAndName center" type="text" placeholder="Search">
          <div class="dateRange flex">
            <i class="material-icons center font30">date_range</i>
            <div class="dateInputs">
              <i>from:</i>
              <input type="date" min="1979-12-31">
              <i>to:</i>
              <input type="date" min="1979-12-31">
            </div>                
          </div>   
        </form>
        <div class="userButtons flex">
          ${require('../posts').getUser() ? `<a href="#" class="postCreateButton">
            <i class="font40 center"><b>+</b></i>
          </a>` : '' }
          <div class="editDelete">
            <a href="#">
              <i class="material-icons font40 center accountPopup">
                person
              </i>
            </a>
            <div class="profilePopup">
              ${require('../posts').getUser() ? `<b>${require('../posts').getUser()}</b>
              <a href="#" class="editDeleteMenuItem">Logout</a>` : `
              <a href="#" class="editDeleteMenuItem">Login</a>`}
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="content">
    </div>
    <footer class="flex">
      <div class="logo flex">
        <p class="appName"><b>Ugagram</b></p>
      </div>
      <div class="footerInfo">
        <p>All content c 2018 Alexander Kovalchuk</p>
        <p>FAMCS, group 5</p>
        <p>last update: 02.04.2018</p>
      </div>
      <div class="contacts">
        <p>Contact Email: <b>skateray17@gmail.com</b></p>
      </div>
    </footer>`;
};
