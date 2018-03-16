const createEdit = require('../components/editPost');
//TODO
function createPostPlace(event){
  event.preventDefault();
  const ul = document.getElementsByTagName('ul')[0];
  if(!ul){
    return false;
  }
  const li = document.createElement('li');
  li.innerHTML = createEdit();
  ul.insertBefore(li, ul.children[0]);
}

module.exports = createPostPlace;
