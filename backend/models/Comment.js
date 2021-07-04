const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: String, required: true},
  like:{type: Boolean, required: true }
});

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;
