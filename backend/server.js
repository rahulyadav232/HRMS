const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require("./routes/candidateRoutes");
// const employeeRoutes = require('./routes/employeeRoutes');
// const attendanceRoutes = require('./routes/attendanceRoutes');
// const leaveRoutes = require('./routes/leaveRoutes');

dotenv.config();
const app = express();
// app.use(cors());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

const connect = require("./config/database");

connect()
  .then(() => {
    console.log("✅ Successfully Connected to Database");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });


app.use('/api/auth', authRoutes);
app.use("/api/candidates", candidateRoutes);

// app.use('/api/employees', employeeRoutes);
// app.use('/api/attendance', attendanceRoutes);
// app.use('/api/leaves', leaveRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));