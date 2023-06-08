const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
    {
        name: String,
        email:String,
        password:String
    },
    {
        timestamps: true,
    }
);

const userModel = mongoose.model('User', usersSchema);

module.exports = {
    userModel
}