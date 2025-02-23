const Candidate = require("../models/Candidate");

// Get all candidates
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new candidate
exports.addCandidate = async (req, res) => {
    try {
      console.log("Received Data:", req.body); // Debugging - Log incoming request data
  
      const { name, email, phone, position, experience } = req.body;
  
      if (!name || !email || !phone || !position || !experience) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const existingCandidate = await Candidate.findOne({ email });
      if (existingCandidate) {
        return res.status(400).json({ error: "Candidate with this email already exists" });
      }
  
      const newCandidate = new Candidate({
        name,
        email,
        phone,
        position,
        experience,
      });
  
      const savedCandidate = await newCandidate.save();
      console.log("Saved Candidate:", savedCandidate); // Debugging - Log saved candidate
  
      res.status(201).json(savedCandidate);
    } catch (error) {
      console.error("Error saving candidate:", error);
      res.status(500).json({ error: "Server error" });
    }
  };

// Update candidate status
exports.updateCandidate = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedCandidate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a candidate
exports.deleteCandidate = async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ message: "Candidate deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
