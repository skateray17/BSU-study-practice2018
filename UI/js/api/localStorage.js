const { PhotoPosts } = require('../../../task4/photoPosts');
const { PhotoPost } = require('../../../task4/photoPost');
const passwordsHashs = require('../../resources/passwordHashs.json');

function createSomePosts(){
  const photoPosts = new PhotoPosts();

  photoPosts.addPost(new PhotoPost('lol', '2018-02-23T23:02:42', 'asdasd#asfa asfa#efef#grgrd ', 'https://78.media.tumblr.com/cb2aeea6b06506af90614ee65e3fd3d2/tumblr_p282pi0P4m1rrgyf5o1_500.png', ['kek']));
  photoPosts.addPost(new PhotoPost('kek', '2018-02-23T22:01:40', 'asfaf#fdfd #adfad#rrr', 'https://uc.uxpin.com/files/839015/832598/image-612fd1.png', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-22T01:11:42', '#devil#paradise#beast', 'https://sun9-9.userapi.com/c840623/v840623468/1f6cd/ABOJjQ_oAlU.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('shpek', '2018-02-21T23:59:43', 'My first#post', 'https://pp.userapi.com/c626926/v626926297/244ab/_KYYeq2Nivw.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('shrek', '1999-09-09T12:02:12', 'Very #smart#clever person #Mum_loves_me#50$per_hour', 'https://pp.userapi.com/c621324/v621324944/3fb6/jAcu42c-mVY.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('dasha', '2018-02-25T12:00:45', '#description', 'https://pp.userapi.com/c625831/v625831944/38e51/5wu5nd3TFqo.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-25T14:45:59', '#asfa#fdfd', 'https://pp.userapi.com/c622831/v622831944/1c8ce/ow1DC8X0lQM.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('drop database', '2018-02-22T15:43:22', '#fa af adfa #dgdg', 'https://pp.userapi.com/c618226/v618226297/1da36/KOvMdDcV3T0.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('kate', '2018-02-20T13:25:43', 'fabfupevpb#kjfj #dfs lkdfn', 'https://pp.userapi.com/c421430/v421430297/fe0/JR7AmF0xWg4.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:43', 'fdaf#asfa', 'https://pp.userapi.com/c629414/v629414080/520f4/eU-L3npmObs.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:44', 'fdaf#asfa', 'https://pp.userapi.com/c638224/v638224080/6cda/BvendCuLhB4.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:45', 'fdaf#asfa', 'https://pp.userapi.com/c841325/v841325428/242cd/l39QUVI4erU.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:46', 'fdaf#asfa', 'https://pp.userapi.com/c638824/v638824080/1a2d8/GoHGM08uMu8.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:47', 'fdaf#asfa', 'https://pp.userapi.com/c638226/v638226080/ff4a/HIPjO6PFYLM.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:48', 'fdaf#asfa', 'https://pp.userapi.com/c604417/v604417080/2dc92/gUrjk0bZsT4.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:49', 'fdaf#asfa', 'https://pp.userapi.com/c638225/v638225080/982/PTWcdR83WpQ.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:50', 'fdaf#asfa', 'https://pp.userapi.com/c629130/v629130080/cd33/alQtFoA__J0.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:51', 'fdaf#asfa', 'https://pp.userapi.com/c621324/v621324944/3fb6/jAcu42c-mVY.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:52', 'fdaf#asfa', 'https://pp.userapi.com/c621324/v621324944/3fb6/jAcu42c-mVY.jpg', ['lol', 'kek']));
  photoPosts.addPost(new PhotoPost('lol', '2018-02-20T12:24:53', 'fdaf#asfa', 'https://pp.userapi.com/c621324/v621324944/3fb6/jAcu42c-mVY.jpg', ['lol', 'kek']));

  return photoPosts;
}

module.exports = function(){
  window.localStorage.setItem('posts', JSON.stringify(createSomePosts()));
  window.localStorage.setItem('user', JSON.stringify(null));
  window.localStorage.setItem('passwordsHashs', JSON.stringify(passwordsHashs));
};
