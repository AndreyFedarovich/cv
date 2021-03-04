const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSumarySchema = new Schema(
  {
    resumeId: String,
    text: String,
  },
  { collection: "resumeSummary" }
);

module.exports = mongoose.model("summaryList", resumeSumarySchema);
