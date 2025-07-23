// Load env vars
require("dotenv").config();

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");

// Create express app
const app = express();
app.use(express.json());

// Load your Student model
const Student = require("./studentModel");

// Connect to MongoDB
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8000;

console.log("MONGODB_URL:", process.env.MONGODB_URL);
console.log("PORT:", process.env.PORT);


mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB is connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error("MongoDB connection error:", err));

// GET all students
app.get("/all-students", async (req, res) => {
  const allStudents = await Student.find();
  res.status(200).json({
    message: "Success!",
    allStudents
  });
});

// POST new student
app.post("/add-student", async (req, res) => {
  const { firstName, lastName, studentClass, gender, height, age } = req.body;
  const newStudent = new Student({ firstName, lastName, studentClass, gender, height, age });
  await newStudent.save();
  res.status(201).json({
    message: "Success",
    newStudent
  });
});

// PUT update student
app.put("/edit-student/:id", async (req, res) => {
  const { id } = req.params;
  const { studentClass, height, age } = req.body;
  const editedStudent = await Student.findByIdAndUpdate(
    id,
    { studentClass, height, age },
    { new: true }
  );
  res.status(200).json({
    message: "Success!",
    editedStudent
  });
});

// DELETE student (better to use param)
app.delete("/delete-student/:id", async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.status(200).json({
    message: "Student deleted successfully!"
  });
});
