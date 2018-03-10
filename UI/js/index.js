const { addPost, addPosts, removePhotoPost, deleteEl, editPhotoPost, user } = require('./posts');

function showHeaderContentFooter() {
  document.getElementById('body').innerHTML = `
    <header class="header flex">
      <div class="headerDiv center flex">
        <a href="#" class="logo flex">
          <img class="logoImage" src="https://uc.uxpin.com/files/839015/832598/image-612fd1.png">
          <div class="verticalLine"></div>
          <p class="appName"><b>Ugagram</b></p>
        </a>
        <div class="search flex">
          <div class="help">You may search for A's and B's post, tagged with #c#d via typing "A B #c#d"</div>
          <input class="filterByTagAndName center" type="text" placeholder="Search">
          <div class="dateRange flex">
            <i class="material-icons center font30">date_range</i>
            <div class="dateInputs">
              <i>from:</i>
              <input type="date">
              <i>to:</i>
              <input type="date">
            </div>                
          </div>   
        </div>
        <div class="userButtons flex">
          <a href="#">
            <i class="font40 center"><b>+</b></i>
          </a>
          <div class="editDelete">
            <a href="#">
              <i class="material-icons font40 center accountPopup">
                person
              </i>
            </a>
            <div class="profilePopup">
              ${user ? `<b>${user}</b>
              <a href="#" class="editDeleteMenuItem">Edit profile</a>
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
        <p>last update: 10.03.2018</p>
      </div>
      <div class="contacts">
        <p>Contact Email: <b>skateray17@gmail.com</b></p>
      </div>
    </footer>
    `;
}

function showPosts() {
  const content = document.getElementsByClassName('content')[0];
  content.innerHTML = `<ul class="flex"></ul>
        <button class="uploadOlder" onclick="skatLib.addPosts()">Show older photos</button>`;
  addPosts({});
}

showHeaderContentFooter();
showPosts();

module.exports = {
  addPosts,
  addPost,
  editPhotoPost,
  removePhotoPost,
  deleteEl,
};
