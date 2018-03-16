const showMainPage = require('./showListOfPosts');

module.exports = function() {
  const filter = {};
  const str = document.getElementsByClassName('filterByTagAndName')[0].value;
  const tags = str.match(/#[^\s#]*/g);
  let authors = str.match(/([^#\S]|^)[^\s#]+/g);
  authors = authors ? authors.map((el) => el[0] === ' ' ? el.substr(1) : el) : null;
  let [ from, to ] = document.getElementsByClassName('dateInputs')[0].getElementsByTagName('input');
  from = from.value;
  to = to.value;
  if(from){
    filter.startDate = new Date(from);
  }
  if(to){
    filter.endDate = new Date(to);
    filter.endDate.setDate(filter.endDate.getDate() + 1);
  }
  if(authors){
    filter.authors = authors;
  }
  if(tags){
    filter.tags = tags;
  }
  showMainPage(filter);
};
