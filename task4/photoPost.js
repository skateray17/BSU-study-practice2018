let _id = 1;
class PhotoPost {
  /**
   * gets tags from description
   * 
   * @throws {Error}
   * @param {String} author 
   * @param {String, Date} publDate 
   * @param {[String]} likes 
   * @param {String} description 
   * @param {String} photoLink 
   * @this  {PhotoPost}
   */
  constructor(author, publDate, description, photoLink, likes = []) {
    this.author = author;
    this.publDate = new Date(publDate);
    this.likes = likes;
    this._id = (_id++).toString();
    this.description = description;
    this.photoLink = photoLink;
    this.tags = description.match(/#[^\s#]*/g);
  }

  validate() {
    if (typeof (this.author) !== 'string' || typeof (this.description) !== 'string' || !this.description ||
      !this.publDate || !this.author || !this.photoLink || typeof (this.photoLink) !== 'string' ||
      !(this.likes instanceof Array) || !this.likes.reduce((pr, el) => typeof el === 'string', true) ||
      typeof (this._id) !== 'string' || !(this.publDate instanceof Date)) {
      return false;
    }
    return true;
  }
}

module.exports = {
  PhotoPost
};
