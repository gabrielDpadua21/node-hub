'use strict';

const mongoose = require('mongoose');
const UserSchema = require('../models/UserSchema');
const TryCatch = require('../utils/TryCatch');

class UserRepository {
    constructor() {
        this.model = mongoose.model('user', UserSchema);
    }

    findAll(page) {
        return this.model.paginate({}, { page: page, limit: 10 });
    }

    findById(_id) {
        return this.model.findById(_id);
    }

    findByEmail(email) {
        return this.model.findOne({ 'email': email });
    }

    findaByEmailPassword(email) {
        return this.model.findOne({ 'email': email }).select('+password')
    }

    async create(collection) {
        const newData = await TryCatch.tryCallback(this.model.create(collection));

        if (!newData.error)
            newData.password = undefined

        return newData;
    }

    update(_id, collection) {
        return this.model.findByIdAndUpdate(_id, collection, { new: true });
    }
}

module.exports = new UserRepository;