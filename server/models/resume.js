const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema(
  {
    userId: String,
    name: String,
    lastname: String,
    email: String,
    phoneNumber: String,
    position: String,
  },
  { collection: "resume" }
);

module.exports = mongoose.model("resume", resumeSchema);
