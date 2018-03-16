const { PhotoPost } = require('./photoPost');

class PhotoPosts {
  constructor() {
    this.arr = [];
  }

  /**
   * 
   * @param {PhotoPost} post 
   * @returns {Boolean} true if success, false if failure
   */
  addPost(post) {
    if (!(post instanceof PhotoPost) || !post.validate()) {
      console.log('Incorrect post');
      return false;
    }
    if (!this.arr.find((el) => el._id === post._id)) {
      this.arr.push(post);
      this.arr.sort((a, b) => b.publDate - a.publDate);
      return true;
    }
    return false;
  }

  /**
   * 
   * @param {Number} skip 
   * @param {Number} top 
   * @param {{tags:[String], authors:[String], startDate: Date, endDate: Date}} filter 
   * @returns {[PhotoPost]} ${top} photoes without ${skip} ignored according to filter
   */
  getPhotoPosts(skip = 0, top = 10, filter = {}) {
    if (typeof skip !== 'number' || typeof top !== 'number' || typeof filter !== 'object') {
      console.log('Incorrect getPhotoPosts params');
      return false;
    }
    let filtered = this.arr
      .filter((a) => (filter.authors instanceof Array ? filter.authors.includes(a.author) : true) &&
        (filter.tags instanceof Array ? filter.tags.every(el => a.tags.includes(el)) : true) &&
        (filter.startDate instanceof Date ? new Date(a.publDate) >= filter.startDate : true) &&
        (filter.endDate instanceof Date ? new Date(a.publDate) <= filter.endDate : true));
    return { 
      arr: filtered.slice(skip, skip + top),
      finished: skip + top >= filtered.length, 
    };
  }

  /**
   * 
   * @param {String} id 
   * @returns {PhotoPost, undefined} photoPost if it exists, or undefined if not
   */
  getPhotoPost(id) {
    return this.arr.find((el) => el._id === id);
  }

  /**
   * 
   * @param {String} id 
   * @param {Object} newPost 
   * @returns {Boolean} true if success, false if failure
   */
  editPhotoPost(id, newPost) {
    const i = this.arr.findIndex((el) => el._id === id);
    if (i === -1) {
      console.log('No posts with such ID');
      return false;
    }
    const tmp = Object.create(this.arr[i].__proto__);
    for (let key in this.arr[i]) {
      tmp[key] = this.arr[i][key];
    }
    const edit = ['description', 'author', 'publDate', 'likes', 'photoLink'];
    for (let prop of edit) {
      tmp[prop] = newPost[prop] !== undefined ? newPost[prop] : tmp[prop];
    }
    tmp.tags = tmp.description.match(/#[^\s#]*/g);
    if (!tmp.validate()) {
      console.log('Incorrect post editing');
      return false;
    }
    this.arr[i] = tmp;
    return true;
  }

  /**
   * 
   * @param {String} id 
   * @returns {Boolean} true if success, false if failure
   */
  removePhotoPost(id) {
    let i = this.arr.findIndex((el) => el._id === id);
    if (i === -1) {
      console.log('No posts with such ID');
      return false;
    }
    this.arr.splice(i, 1);
    return true;
  }

}

module.exports = {
  PhotoPosts,
};
