const mongoose = require("mongoose");

const usersListSchema = new mongoose.Schema({
    id: String,
    password: String,
    answer: String,
    list: [
        {
            title: String,
            content: String,
            favorite: Boolean,
        },
    ],
});

module.exports =
    mongoose.model.usersList || mongoose.model("usersList", usersListSchema);
