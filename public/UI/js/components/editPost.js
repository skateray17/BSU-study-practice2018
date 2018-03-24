module.exports = function(url = '', descr = '') {
  return `<form class="inputForm">
      <b>Photo url:</b>
      <input class="addUrl" type="url" value="${url}">
      <b>Description:</b>
      <div class="addDescr" contenteditable="true">${descr}</div>
      <div>
        <input type="submit" value="Save"><input type="reset" value="cancel">
      </div>
    </form>`;
};
