const mongoose = require("mongoose");

const uri = `mongodb+srv://rahyadav50:ZMzcCvhjXVTtjMfk@cluster0.gip5m.mongodb.net/HMBS?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

module.exports = connectDB;

