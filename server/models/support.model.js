let mongoose = require('mongoose');

let supportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "notSolved"
    },
    askedOn: {
        type: Date,
        default: Date.now(),
        required: true
    }
}, {
        versionKey: false,
        strict: true
    });

module.exports = mongoose.model('support_querie', supportSchema);