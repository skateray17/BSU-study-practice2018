const { PhotoPosts } = require('../../task4/photoPosts');
const { editPostPlace } = require('./api/postsEditing');
/**
 * 
 * @param {PhotoPost} post 
 */
function addPost(post) {
  const photoPosts = JSON.parse(window.localStorage.posts);
  if (PhotoPosts.prototype.addPost.call(photoPosts, post)) {
    let i = photoPosts.arr.indexOf(post);
    let ul = document.querySelector('ul');
    if (i < ul.childNodes.length) {
      ul.insertBefore(createPostHtml(post), ul.childNodes[i]);
    }
    window.localStorage.setItem('posts', JSON.stringify(photoPosts));
    return true;
  }
  return false;
}

let getPostsFunc;

function addPosts(filter) {
  const ul = document.getElementsByTagName('ul')[0];
  if (filter && typeof (filter) === 'object') {
    ul.innerHTML = '';
    document.getElementsByTagName('button')[0].style = 'display:block';
    getPostsFunc = (() => { 
      let viewed = 0; 
      const { arr: posts } = PhotoPosts.prototype.getPhotoPosts.call(JSON.parse(window.localStorage.posts), 0, Infinity, filter); 
      return function () { 
        return viewed += 5, { 
          arr: posts.slice(viewed - 5, viewed),
          finished: viewed >= posts.length, 
        };
      }; 
    })();
  }
  if (typeof (getPostsFunc) !== 'function') {
    return false;
  }
  const { arr: posts, finished } = getPostsFunc();
  for (let i = 0; i < posts.length; i++) {
    ul.appendChild(createPostHtml(posts[i]));
  }
  if (finished) {
    document.getElementsByTagName('button')[0].style = 'display:none';
  }
  return true;
}

/**
 * 
 * @param {PhotoPost} post 
 * @returns {Node} html of current post
 */
function createPostHtml(post) {
  const li = document.createElement('li');
  li.id = `post${post._id}`;
  li.innerHTML =
    `<header class="userInfo flex">
      <a href="#">
        <img class="userAvatar" src="https://uc.uxpin.com/files/839015/832598/image-612fd1.png">
      </a>
      <a class="username" href="#"><b>${post.author}</b></a>
        ${ JSON.parse(window.localStorage.user) === post.author ? `<div class="editDelete">
          <a href="#">
            <i class="material-icons">edit</i>
          </a>    
        <div class="editDeletePopup">
          <a href="#" class="editDeleteMenuItem">Edit</a>
          <a href="#" class="editDeleteMenuItem">Delete</a>
        </div>
      </div>`: '' }
    </header>
    <img class="photo" src="${post.photoLink}">
    <a href="#" class="star">
      <i class="material-icons font40"${ post.likes.includes(JSON.parse(window.localStorage.user)) 
        ? 'style="color:red"> favorite' : '>favorite_border' }</i>
    </a>
    <div class="amountOfLikes">
      <i><b>${post.likes.length} likes</b></i>
    </div>
    <div class="comment">
      <a class="username" href="#"><b>${post.author}:</b></a>
      <span>${post.description}</span>
    </div>
    <span class="publDate">${new Date(post.publDate).toLocaleString()}</span>`;
  li.childNodes[4].childNodes[1].addEventListener('click', like);
  const editButtons = li.querySelectorAll('.editDeleteMenuItem');
  if(editButtons.length){
    editButtons[0].addEventListener('click', editPostPlace);
    editButtons[1].addEventListener('click', deleteEl);
  }
  // li.querySelectorAll('.editDeleteMenuItem')[1].addEventListener('click', deleteEl);
  return li;
}

function editPhotoPost(id, post) {
  const photoPosts = JSON.parse(window.localStorage.posts);
  if (PhotoPosts.prototype.editPhotoPost.call(photoPosts, id, post)) {
    const childNode = document.getElementById(`post${id}`);
    if (childNode) {
      document.getElementsByTagName('ul')[0].replaceChild(createPostHtml(PhotoPosts.prototype.getPhotoPost.call(photoPosts, id)), childNode);
    }
    window.localStorage.setItem('posts', JSON.stringify(photoPosts));
    return true;
  }
  return false;
}

function removePhotoPost(id) {
  const photoPosts = JSON.parse(window.localStorage.posts);
  if (PhotoPosts.prototype.removePhotoPost.call(photoPosts, id)) {//photoPosts.removePhotoPost(id)) {
    const childNode = document.getElementById(`post${id}`);
    if (childNode) {
      document.getElementsByTagName('ul')[0].removeChild(childNode);
    }
    window.localStorage.setItem('posts', JSON.stringify(photoPosts));
    return true;
  }
  return false;
}

function like(event) {
  event.preventDefault();
  if (!JSON.parse(window.localStorage.user))
    return;
  const photoPosts = JSON.parse(window.localStorage.posts);
  const id = Number.parseInt(event.target.closest('li').id.substr(4), 10);
  const post = PhotoPosts.prototype.getPhotoPost.call(photoPosts, id.toString());//photoPosts.getPhotoPost(id.toString());
  if (!post) return;
  let ind = post.likes.indexOf(JSON.parse(window.localStorage.user));
  if (ind === -1) {
    post.likes.push(JSON.parse(window.localStorage.user));
    event.target.style = 'color:red';
    event.target.innerHTML = 'favorite';
  } else {
    post.likes.splice(ind, 1);
    event.target.style = 'color:black';
    event.target.innerHTML = 'favorite_border';
  }
  event.target.parentNode.nextSibling.nextSibling.innerHTML = `<i><b>${post.likes.length} likes</i></b>`;
  window.localStorage.setItem('posts', JSON.stringify(photoPosts));
}

function deleteEl(e) {
  e.preventDefault();
  const id = e.target.closest('li').id.substr(4);
  return removePhotoPost(id);
}

module.exports = {
  addPost,
  addPosts,
  removePhotoPost,
  deleteEl,
  editPhotoPost,
  createPostHtml,
};
