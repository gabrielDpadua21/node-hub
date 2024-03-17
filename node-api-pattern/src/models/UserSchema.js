'use struct';

const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        select: false,
        required: [true, "password is required"],
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    updated: {
        type: Date,
        default: Date.now()
    }
}, { versionKey: false })

UserSchema.plugin(paginate);

module.exports = UserSchema;