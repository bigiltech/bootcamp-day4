var http = require('http');

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
]

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(students));
}).listen(8080);
