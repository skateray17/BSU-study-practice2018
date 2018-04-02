const express = require('express');
const Post = require('../models/posts/post');
const ApiResponse = require('../models/api-response');
const ApiMessages = require('../models/api-messages');

const router = express.Router();

router.route('/posts/getposts')
  .get((req, res) => {
    Post.find((err, posts) => {
      if (err) {
        res.send(new ApiResponse({
          success: false, extras: {
            msg: ApiMessages.DB_ERROR,
          }
        }));
      } else {
        res.send(new ApiResponse({
          success: true, extras: {
            posts,
          }
        }));
      }
    });
  });

router.route('/posts/createpost')
  .put((req, res) => {
    if (!req.session || !req.session.userProfileModel || !req.session.userProfileModel.nickname) {
      res.send({
        success: false, extras: {
          msg: ApiMessages.UNAUTHORITHED,
        }
      });
    } else {
      console.log(req.body);
      const post = new Post({
        author: req.session.userProfileModel.nickname,
        publDate: new Date(),
        description: req.body.description,
        photoLink: req.body.photourl,
        tags: req.body.description.match(/#[^\s#]*/g) || [],
        likes: [],
      });
      post.save((err) => {
        if (err) {
          res.send(new ApiResponse({
            success: false, extras: {
              msg: ApiMessages.DB_ERROR,
            }
          }));
        } else {
          res.send(new ApiResponse({
            success: true, extras: {
              post,
            }
          }));
        }
      });
    }
  });

router.route('/posts/removepost')
  .delete((req, res) => {
    if (!req.session || !req.session.userProfileModel || !req.session.userProfileModel.nickname) {
      res.send({
        success: false, extras: {
          msg: ApiMessages.UNAUTHORITHED,
        }
      });
    } else {
      Post.remove({ author: req.session.userProfileModel.nickname, _id: req.body.id }, (err) => {
        if (err) {
          res.send(new ApiResponse({
            success: false, extras: {
              msg: ApiMessages.DB_ERROR,
            }
          }));
        } else {
          res.send(new ApiResponse({
            success: true
          }));
        }
      });
    }
  });

router.route('/posts/editpost')
  .post((req, res) => {
    if (!req.session || !req.session.userProfileModel || !req.session.userProfileModel.nickname) {
      res.send({
        success: false, extras: {
          msg: ApiMessages.UNAUTHORITHED,
        }
      });
    } else {
      const change = {};
      if (req.body.description) {
        change.description = req.body.description;
        change.tags = req.body.description.match(/#[^\s#]*/g) || [];
      }
      if (req.body.photourl) {
        change.photoLink = req.body.photourl;
      }
      if (req.body.likes) {
        change.likes = JSON.parse(req.body.likes);
      }
      Post.update({ author: req.session.userProfileModel.nickname, _id: req.body.id }, change, (err) => {
        if (err) {
          res.send(new ApiResponse({
            success: false, extras: {
              msg: ApiMessages.DB_ERROR,
            }
          }));
        } else {
          res.send(new ApiResponse({
            success: true
          }));
        }
      });
    }
  });

module.exports = router;
