const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
    website: String 
});    

const User = mongoose.model('User', userSchema);

module.exports = User;