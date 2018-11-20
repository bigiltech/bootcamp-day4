const mongoose = require('mongoose');


const url = 'mongodb://localhost:27017/students';

mongoose.connect(url);

const Student = mongoose.model('Student', {
    name: String,
    phoneNumber: String
});

const student = new Student({
    name: "Hussein Ismail",
    phoneNumber: "1234"
});

student
    .save()
    .then(resp => {
        console.log("Saved!");
        mongoose.connection.close();
    });
