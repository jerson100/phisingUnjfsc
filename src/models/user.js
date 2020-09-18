const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    autoIndex: true,
    timestamps: true
});

module.exports = model('user', UserSchema);