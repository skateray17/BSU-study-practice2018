const PhotoPost = require('./photoPost');
const PhotoPosts = require('./photoPosts');

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

module.exports = {
    PhotoPost,
    PhotoPosts,
}