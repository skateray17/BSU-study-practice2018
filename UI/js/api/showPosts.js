const { addPosts } = require('../posts');

module.exports = function(filter = {}) {
  const content = document.getElementsByClassName('content')[0];
  content.innerHTML = `<ul class="flex"></ul>
        <button class="uploadOlder">Show older photos</button>`;
  content.querySelector('.uploadOlder').addEventListener('click', () => addPosts());
  addPosts(filter);
};
