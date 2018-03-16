const { addPosts } = require('../posts');

module.exports = function(filter = {}) {
  const content = document.getElementsByClassName('content')[0];
  content.innerHTML = `<ul class="flex"></ul>
        <button class="uploadOlder" onclick="skatLib.addPosts()">Show older photos</button>`;
  addPosts(filter);
};
