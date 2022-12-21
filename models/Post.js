const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    username: String,
    //password: String,
    userInfos: String,
})

module.exports = mongoose.model('Post', PostSchema);