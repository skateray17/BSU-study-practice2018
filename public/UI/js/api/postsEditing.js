const createEdit = require('../components/editPost');
const { PhotoPost } = require('../../../task4/photoPost');
const { PhotoPosts } = require('../../../task4/photoPosts');
//const { createPost } = require('../posts');
//TODO
function createPostPlace(event){
  event.preventDefault();
  const ul = document.querySelector('ul');
  if(!ul){
    return false;
  }
  const t = ul.querySelector('.editPost');
  if(t){
    return false;
  }
  const li = document.createElement('li');
  li.innerHTML = createEdit();
  li.className = 'editPost';
  li.querySelector('form').addEventListener('submit', edit);
  li.querySelector('form').addEventListener('reset', reset);
  ul.insertBefore(li, ul.children[0]);
}

function editPostPlace(event){
  event.preventDefault();
  const li = event.target.closest('li');
  li.innerHTML = createEdit(li.querySelector('.photo').src, li.querySelector('.comment>span').innerHTML);
  li.querySelector('form').addEventListener('reset', reset);
  li.querySelector('form').addEventListener('submit', edit);
}

function reset(event){
  event.preventDefault();
  const li = event.target.parentNode;
  if(li.id){
    const id = li.id.substr(4);
    li.replaceWith(require('../posts').createPostHtml(
      PhotoPosts.prototype.getPhotoPost.call(JSON.parse(window.localStorage.posts), id)));
  } else {
    li.remove();
  }
}

function edit(event){
  event.preventDefault();
  const li = event.target.parentNode;
  if(li.id){
    const id = li.id.substr(4);
    require('../posts').editPhotoPost(id, {
      description: li.querySelector('.addDescr').innerHTML,
      photoLink: li.querySelector('.addUrl').value,
    });
  } else {
    const post = new PhotoPost(require('../posts').getUser(), Date.now(), 
      li.querySelector('.addDescr').innerText, li.querySelector('.addUrl').value, []);
    document.querySelector('ul').removeChild(document.querySelector('.editPost'));
    require('../posts').addPost(post);
    console.log(post);
    console.log(post.validate());
  }
}

module.exports = {  
  createPostPlace,
  editPostPlace,
};
