const studentsRouter = require("express").Router()
const Student = require("../sequelize").Student;

// Get all students.
studentsRouter.get("/", async (req, res) => {
    let students = await Student.findAll();
    res.json(students);
});

// Get single student.
studentsRouter.get("/:id", (req, res) => {
    res.json({result: "Single student"});
});

// Delete a student.
studentsRouter.delete("/:id", async (req, res) => {
    await Student.destroy({where: {id: req.params.id}});
    res.json({result: "Deleted successfully!"});
});

// Create a student.
studentsRouter.post("/", async (req, res) => {
    console.log(req.body);
    const student = await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        regDate: new Date()
    });
    res.json(student);
});

module.exports = studentsRouter;