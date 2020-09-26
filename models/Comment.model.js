const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  user_id: [ { type : Schema.Types.ObjectId, ref: 'User' } ],
  comment: String,
  rate: Number 
},
{
    timestamps:true
})

module.exports = model('Comment', commentSchema);

