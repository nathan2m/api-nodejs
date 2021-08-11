const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/noderest", { useNewUrlParser: true }/* , { useMongoClient: true } */);
mongoose.Promise = global.Promise;

module.exports = mongoose;