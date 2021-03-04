const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeRoleSchema = new Schema(
  {
    resumeId: String,
    company: String,
    endMonth: String,
    endYear: String,
    isCurrent: Boolean,
    location: String,
    position: String,
    startMonth: String,
    startYear: String,
  },
  { collection: "resumeRole" }
);

module.exports = mongoose.model("rolesList", resumeRoleSchema);
