var mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

var Schema = mongoose.Schema;
var userSchema = new Schema({
    id: { type: String, unique: true },
    name: String,
    email: { type: String, unique: true },
    password: String,
    created: Number,
    games: [
        // An array of Objects
        {
            id: String,
            title: String,
            genres: [],
            lastUpdated: Number,
            created: Number
        }
    ]
});

var collection = "users";
var User = mongoose.model(collection, userSchema);

module.exports = User;
