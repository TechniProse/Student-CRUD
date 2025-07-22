
const mongoose = require ("mongoose");

// creates a format for the student data
const studentSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    studentClass: {type: String, require: true},
    gender: {type: String, require: true},
    height: {type: String, default: " "},
    age: {type: Number, require: true}
});

// student model
const Student = new mongoose.model("Student", studentSchema);

// export the model
module.exports = Student;