const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScheam = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    usernmae: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('dataModel', userScheam, 'salting');