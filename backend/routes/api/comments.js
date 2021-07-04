const express = require('express');
const router = express.Router();

//Comments model

const Comment=require('../../models/Comment');

//@route GET api/Comments
//@desc Get All Commnets
//@access Public
router.get('/',(req,res) => {
    Comment.find()
    .then(comments => res.json(comments))
});

//@route POST api/Comments
//@desc create a post
router.post('/',(req,res) => {
   const newComment=new Comment({
       comment:req.body.comment
   });
   newComment.save().then(comment =>res.json(comment));

});

module.exports = router;