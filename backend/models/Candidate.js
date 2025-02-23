const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, default: "new" },
  experience: { type: String, required: true },
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
