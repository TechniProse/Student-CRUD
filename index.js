<<<<<<< HEAD
// setting up the server
const express = require("express");
const app = express();

app.use(express.json());


// setting up database and asking the app to listen

const mongoose = require("mongoose");
mongoose.connect (MONGODB_URL)
.then (()=>{
    console.log("MongoDB is connected...");
    app.listen(8000, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
});

// import student model
const Student = require("./studentModel");

// GET request for all the students
app.get("/all-students", async(req, res)=>{
    const allStudents = await Student.find();
    res.status(200).json({
        message: "Success!",
        allStudents
    });
});

// POST request to add a student
app.post("/add-student", async (req, res)=>{
    const {firstName, lastName, studentClass, gender, height, age} = req.body;
    const newStudent = new Student ({firstName, lastName, studentClass, gender, height, age});
    await newStudent.save();
    res.status(201).json({
        message: "Success",
        newStudent
    })
});

// PUT request to edit student information
app.put("/edit-student/:id", async (req, res)=>{
    const {id} = req.params
    const {studentClass, height, age} = req.body
    const editedStudent = await Student.findByIdAndUpdate (
        id,
        {studentClass, height, age},
        {new: true}
    )
    res.status(200).json({
        message: "Success!",
        editedStudent
    });
})

// DELETE request to delete a student
app.delete("/delete-student", async (req, res)=>{
    const {id} = req.body
    const deletedStudent = await Student.findByIdAndDelete (id);
    res.status(200).json({
        message: "Student deleted successfully!"
    });
=======
// setting up the server
const express = require("express");
const app = express();

app.use(express.json());


// setting up database and asking the app to listen

const mongoose = require("mongoose");
mongoose.connect (MONGODB_URL)
.then (()=>{
    console.log("MongoDB is connected...");
    app.listen(8000, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
});

// import student model
const Student = require("./studentModel");

// GET request for all the students
app.get("/all-students", async(req, res)=>{
    const allStudents = await Student.find();
    res.status(200).json({
        message: "Success!",
        allStudents
    });
});

// POST request to add a student
app.post("/add-student", async (req, res)=>{
    const {firstName, lastName, studentClass, gender, height, age} = req.body;
    const newStudent = new Student ({firstName, lastName, studentClass, gender, height, age});
    await newStudent.save();
    res.status(201).json({
        message: "Success",
        newStudent
    })
});

// PUT request to edit student information
app.put("/edit-student/:id", async (req, res)=>{
    const {id} = req.params
    const {studentClass, height, age} = req.body
    const editedStudent = await Student.findByIdAndUpdate (
        id,
        {studentClass, height, age},
        {new: true}
    )
    res.status(200).json({
        message: "Success!",
        editedStudent
    });
})

// DELETE request to delete a student
app.delete("/delete-student", async (req, res)=>{
    const {id} = req.body
    const deletedStudent = await Student.findByIdAndDelete (id);
    res.status(200).json({
        message: "Student deleted successfully!"
    });
>>>>>>> f83aa602f8af1cd84eda110e8b05ebf6463263af
});