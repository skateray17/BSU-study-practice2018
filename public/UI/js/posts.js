const { PhotoPosts } = require('../../task4/photoPosts');
const { editPostPlace } = require('./api/postsEditing');

let useraaa;
let posts;
/**
 * 
 * @param {PhotoPost} post 
 */
function addPost(post) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', '/api/posts/createpost');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      if (response.success) {
        PhotoPosts.prototype.addPost.call(posts, response.extras.post);
        let i = posts.arr.indexOf(response.extras.post);
        let ul = document.querySelector('ul');
        if (i < ul.childNodes.length) {
          ul.insertBefore(createPostHtml(post), ul.childNodes[i]);
        }
      } else {
        console.log(response.extras);
      }
    } else {
      console.log(JSON.parse(xhr.response).extras);
    }
  };
  console.log(post);
  xhr.send(`photourl=${post.photoLink}&description=${post.description}`);
}

let getPostsFunc;

function addPosts(filter) {
  const ul = document.getElementsByTagName('ul')[0];
  if (filter && typeof (filter) === 'object') {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/posts/getposts');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        if (response.success) {
          posts = { arr: response.extras.posts, };
          posts.arr.sort((a, b) => new Date(b.publDate) - new Date(a.publDate));
          ul.innerHTML = '';
          document.getElementsByTagName('button')[0].style = 'display:block';
          getPostsFunc = (() => {
            let viewed = 0;
            const { arr: postss } = PhotoPosts.prototype.getPhotoPosts.call(posts, 0, Infinity, filter);
            return function () {
              return viewed += 5, {
                arr: postss.slice(viewed - 5, viewed),
                finished: viewed >= postss.length,
              };
            };
          })();
          addPosts();
        }
      }
    };
    xhr.send();
  }
  else {
    if (typeof (getPostsFunc) !== 'function') {
      return false;
    }
    const { arr: postss, finished } = getPostsFunc();
    for (let i = 0; i < postss.length; i++) {
      ul.appendChild(createPostHtml(postss[i]));
    }
    if (finished) {
      document.getElementsByTagName('button')[0].style = 'display:none';
    }
    return true;
  }
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
        ${ useraaa === post.author ? `<div class="editDelete">
          <a href="#">
            <i class="material-icons">edit</i>
          </a>    
        <div class="editDeletePopup">
          <a href="#" class="editDeleteMenuItem">Edit</a>
          <a href="#" class="editDeleteMenuItem">Delete</a>
        </div>
      </div>`: ''}
    </header>
    <img class="photo" src="${post.photoLink}">
    <a href="#" class="star">
      <i class="material-icons font40"${ post.likes.includes(useraaa)
      ? 'style="color:red"> favorite' : '>favorite_border'}</i>
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
  if (editButtons.length) {
    editButtons[0].addEventListener('click', editPostPlace);
    editButtons[1].addEventListener('click', deleteEl);
  }
  return li;
}

function editPhotoPost(id, post) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/posts/editpost');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      if (response.success) {
        PhotoPosts.prototype.editPhotoPost.call(posts, id, post);
        const childNode = document.getElementById(`post${id}`);
        if (childNode) {
          document.getElementsByTagName('ul')[0].replaceChild(createPostHtml(PhotoPosts.prototype.getPhotoPost.call(posts, id)), childNode);
        }
      } else {
        console.log(response.extras);
      }
    } else {
      console.log(JSON.parse(xhr.response).extras);
    }
  };
  xhr.send(`photourl=${post.photoLink}&description=${post.description}&id=${id}`);
}

function removePhotoPost(id) {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', '/api/posts/removepost');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response);
      if (response.success) {
        PhotoPosts.prototype.removePhotoPost.call(posts, id);
        const childNode = document.getElementById(`post${id}`);
        if (childNode) {
          document.getElementsByTagName('ul')[0].removeChild(childNode);
        }
      } else {
        console.log(response.extras);
      }
    } else {
      console.log(JSON.parse(xhr.response).extras);
    }
  };
  xhr.send(`id=${id}`);
}

function like(event) {
  event.preventDefault();
  if (!useraaa)
    return;
  const id = event.target.closest('li').id.substr(4);
  const post = PhotoPosts.prototype.getPhotoPost.call(posts, id);//photoPosts.getPhotoPost(id.toString());
  if (!post) return;
  let ind = post.likes.indexOf(useraaa);
  if (ind === -1) {
    post.likes.push(useraaa);
    event.target.style = 'color:red';
    event.target.innerHTML = 'favorite';
  } else {
    post.likes.splice(ind, 1);
    event.target.style = 'color:black';
    event.target.innerHTML = 'favorite_border';
  }
  event.target.parentNode.nextSibling.nextSibling.innerHTML = `<i><b>${post.likes.length} likes</i></b>`;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/posts/editpost');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`id=${id}&likes=${JSON.stringify(post.likes)}`);
}

function deleteEl(e) {
  e.preventDefault();
  const id = e.target.closest('li').id.substr(4);
  return removePhotoPost(id);
}

function firstLoad() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/account/user');
  xhr.onload = () => {
    if(xhr.status === 200){
      useraaa = JSON.parse(xhr.response).extras.user;
    }
    require('./api/showListOfPosts')({});
  };
  xhr.send();
}

function deleteUser() {
  useraaa = null;
}

function getUser(){
  return useraaa;
}

function setUser(us){
  useraaa = us;
}

function getPosts(){
  return posts();
}

module.exports = {
  addPost,
  addPosts,
  removePhotoPost,
  deleteEl,
  editPhotoPost,
  createPostHtml,
  getPosts,
  firstLoad,
  deleteUser,
  getUser,
  setUser,
};
