const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017/students';

mongoose
.connect(url)
.then(() => {
    console.log("connected to database", url)
})
.catch((error) => {
    console.log(error)
})

const Student = mongoose.model('Student', {
    name: String,
    phoneNumber: String
});

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</>");
});

app.get("/api/students", async (req, res) => {
    const students = await Student
        .find({}, { __v: 0 })
    res.json(students)
});

app.post("/api/students", async (req, res) => {
    console.log("POST /api/students");
    const body = req.body

    try {
        if (body.name === undefined) {
            return res.status(400).json({ error: "name missing" });
        }

        const student = new Student({
            name: body.name,
            phoneNumber: body.phoneNumber,
        });

        await student.save();

        console.log("Done!");
        res.status(201).send();
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "something went wrong..." })
    }

});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    