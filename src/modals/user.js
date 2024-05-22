const mongoose = require("../config/dbConfig");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
},{
    collection: 'users'
})

const User = mongoose.model("User", userSchema);
module.exports = User;