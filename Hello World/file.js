const fs = require("fs");

//Sync... Blocking Request
fs.writeFileSync("./test.txt", "Hey There");

//Async... Non-Blocking Req
fs.writeFile("./test.txt", "Hello There Async", (err) => {});

//Default Thread Pool size = 4
