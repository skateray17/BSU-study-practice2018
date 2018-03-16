module.exports = function(url = '', descr = '') {
  return `<form class="inputForm" onsubmit="skatLib.createPost(event)">
      <b>Photo url:</b>
      <input style="width: 80%" type="url" value="${url}">
      <b>Description:</b>
      <div style="width: 80%;border-width:1px; border-style:solid;" contenteditable="true">${descr}</div>
    </form>`;
};
