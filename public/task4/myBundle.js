var posts = (function(){
    
    let _id = 1;
    class PhotoPost{
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
        constructor(author, publDate, description, photoLink, likes = []){
            this.author = author;
            this.publDate = new Date(publDate);
            this.likes = likes;
            this._id = (_id++).toString();
            this.description = description;
            this.photoLink = photoLink;
            this.tags = description.match(/#[^\s#]*/g);
        }

        validate(){
            if(typeof(this.author) !== 'string' || typeof(this.description) !== 'string' || !this.description ||
                !this.publDate || !this.author || !this.photoLink || typeof(this.photoLink) !== 'string' ||
                !(this.likes instanceof Array) || !this.likes.reduce((pr, el) => typeof el === 'string', true) ||
                typeof(this._id) !== 'string' || !(this.publDate instanceof Date)){
                    return false;
            }
            return true;
        }
    }

    class PhotoPosts{
        constructor(){
            this.arr = [];
        }
    
        /**
         * 
         * @param {PhotoPost} post 
         * @returns {Boolean} true if success, false if failure
         */
        addPost(post){
            if(!(post instanceof PhotoPost) || !post.validate()){
                console.log('Incorrect post');
                return false;
            }
            if(!this.arr.find((el) => el._id === post._id)){
                this.arr.push(post);
                this.arr.sort((a,b) => a - b);
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
        getPhotoPosts(skip = 0, top = 10, filter = {}){
            if(typeof skip !== 'number' || typeof top !== 'number' || typeof filter !== 'object'){
                console.log('Incorrect getPhotoPosts params');
                return false;
            }
            return this.arr
                .filter((a) => (filter.authors instanceof Array ? filter.authors.includes(a.author) : true) && 
                    (filter.tags instanceof Array ? filter.tags.every(el => a.tags.includes(el)) : true) &&
                    (filter.startDate instanceof Date ? a.publDate >= filter.startDate : true) && 
                    (filter.endDate instanceof Date ? a.publDate <= filter.endDate : true))
                        .slice(skip, skip + top);
        }
    
        /**
         * 
         * @param {String} id 
         * @returns {PhotoPost, undefined} photoPost if it exists, or undefined if not
         */
        getPhotoPost(id){
            return this.arr.find((el) => el._id === id);
        }
    
        /**
         * 
         * @param {String} id 
         * @param {Object} newPost 
         * @returns {Boolean} true if success, false if failure
         */
        editPhotoPost(id, newPost){
            const i = this.arr.findIndex((el) => el._id === id);
            if(i === -1){
                console.log('No posts with such ID');
                return false;
            }
            const tmp = Object.create(this.arr[i].__proto__);
            for(let key in this.arr[i]){
                tmp[key] = this.arr[i][key];
            }
            const edit = ['description', 'author', 'publDate', 'likes', 'photoLink'];
            for(let prop of edit){
                tmp[prop] = newPost[prop] !== undefined ? newPost[prop] : tmp[prop];
            }
            tmp.tags  = tmp.description.match(/#[^\s#]*/g);
            if(!tmp.validate()){
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
        removePhotoPost(id){
            let i = this.arr.findIndex((el) => el._id === id);
            if(i === -1){
                console.log('No posts with such ID');
                return false;
            }
            this.arr.splice(i, 1);
            return true;
        }
    
    }    


    const photoPosts = new PhotoPosts();

    photoPosts.addPost(new PhotoPost('lol', '2018-02-23T23:02:42', 'asdasd#asfa asfa#efef#grgrd ', '#', ['kek']));
    photoPosts.addPost(new PhotoPost('kek', '2018-02-23T22:01:40', 'asfaf#fdfd #adfad#rrr', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-02-22T01:11:42', '#devil#paradise#beast', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('shpek', '2018-02-21T23:59:43', 'My first#post', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('shrek', '1999-09-09T12:02:12', 'Very #smart#clever person #Mum_loves_me#50$per_hour', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('dasha', '2018-02-25T12:00:45', '#description', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-02-25T14:45:59', '#asfa#fdfd', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('drop database', '2018-02-22T15:43:22', '#fa af adfa #dgdg', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('kate', '2018-20-02T13:25:43', 'fabfupevpb#kjfj #dfs lkdfn', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:43', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:44', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:45', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:46', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:47', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:48', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:49', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:50', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:51', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:52', 'fdaf#asfa', '#', ['lol', 'kek']));
    photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:53', 'fdaf#asfa', '#', ['lol', 'kek']));
    
    
    console.log('-getPhotoPosts')
    console.log('10 posts:');
    console.log(photoPosts.getPhotoPosts());
    console.log('3 posts start from the second:');
    console.log(photoPosts.getPhotoPosts(1, 3));
    console.log('skip = 6 and default-argument for top:');
    console.log(photoPosts.getPhotoPosts(6));
    console.log('posts after filtering:');
    console.log(photoPosts.getPhotoPosts(0, 10, {
        authors: ['lol', 'kek'],
        tags: ['#asfa', '#fdfd'],
        startDate: new Date(2018, 0, 0),
    }));
    console.log('with invalid argument:')
    console.log(photoPosts.getPhotoPosts('argument'));
    console.log('');
    console.log('-getPhotoPost');
    console.log('post with id 2:');
    console.log(photoPosts.getPhotoPost('2'));
    console.log('post with id 100:');
    console.log(photoPosts.getPhotoPost('100'));
    console.log('with invalid argument:');
    console.log(photoPosts.getPhotoPost(100));
    console.log('');
    console.log('-validatePhotoPost');
    console.log('with valid, necessary and not properties:');
    console.log((new PhotoPost('skateray17', '2018-01-01', 'asfa#afa', '#')).validate());
    console.log('with invalid createdAt:');
    const incorrectPost = new PhotoPost('skateray17', '2018-01-01', 'asfa#afa', '#');
    incorrectPost.publDate = 1;
    console.log(incorrectPost.validate());
    console.log('');
    console.log('-addPhotoPost');
    console.log('all posts: ');
    console.log(photoPosts);
    console.log('try to add invalid post: ');
    console.log(photoPosts.addPost(incorrectPost));
    console.log('all posts: ');
    console.log(photoPosts);
    console.log('try to add valid post: ');
    console.log(photoPosts.addPost(new PhotoPost('lol', '2018-22-02T12:24:53', 'fdaf#asfa', '#', ['lol', 'kek'])));
    console.log('all posts: ');
    console.log(photoPosts);
    console.log('');
    console.log('-editPhotoPost');
    console.log('id=3 post before editing:');
    console.log(photoPosts.getPhotoPost('3'));
    console.log('try to edit id=3 post:');
    console.log(photoPosts.editPhotoPost('3', {
        description: 'new description',
        likes: [],
    }));
    console.log('id=3 post after editing:');
    console.log(photoPosts.getPhotoPost('3'));
    console.log('with invalid argument:');
    console.log(photoPosts.editPhotoPost(''));
    console.log('');
    console.log('-removePhotoPost');
    console.log('with invalid argument:');
    console.log(photoPosts.removePhotoPost(''));
    console.log('remove id=3 post');
    console.log(photoPosts.removePhotoPost('3'));
    console.log('try to get id=3 post');
    console.log(photoPosts.getPhotoPost('3'));
    console.log('all posts: ');
    console.log(photoPosts);

    return {
        PhotoPost,
        PhotoPosts,
    }
}());