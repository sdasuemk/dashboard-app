const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// create new model (collection class)
//object model

const Userdata = new mongoose.model('User', userSchema);
module.exports = Userdata;