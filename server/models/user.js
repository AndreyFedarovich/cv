const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String
},{ collection: 'users'});

module.exports = mongoose.model("user", userSchema);
