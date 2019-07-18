const l = require("simple-logging");
const mongoose = require("mongoose");

const User = require("../model/user");

// Conntect to MongoDB Atlas
function connect(MONGO_PATH) {
    mongoose.connect(MONGO_PATH, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
        l.info("Conected to MongoDB.");
    });
}

function exampleDataAccess(email, password) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: email }, (err, user) => {
            if (err) reject(err);

            // Authenticate user & assign session token
            if (user != null && user.password == password) {
                user.activeSession = auth.generateSession();
                user.save(err => {
                    if (err) reject(err);
                    resolve(user);
                });
            } else {
                resolve(null);
            }
        });
    });
}

module.exports = {
    connect: connect
};
