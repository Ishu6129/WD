const mongoose = require('mongoose');

const postschema = mongoose.Schema({
    postdata: String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }, 
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('post', postschema);