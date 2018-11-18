const express = require("express");
const app = express();

const students = [
    {
        id: 1,
        name: "Gordon Fallin",
        phoneNumber: "1234"
    },
    {
        id: 2,
        name: "Altha Neisler",
        phoneNumber: "5678"
    },
    {
        id: 3,
        name: "Oda Highfill",
        phoneNumber: "90123"
    },
    {
        id: 4,
        name: "Hussein",
        phoneNumber: "1234"
    },
];

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</>");
});

app.get("/students", (req, res) => {
    res.json(students);
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
