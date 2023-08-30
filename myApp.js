let express = require('express');
let app = express();

//#4
// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

//#3
app.get('/', (req, res) => {
 let absolutePath = __dirname + '/views/index.html';
 res.sendFile(absolutePath);
})

app.use();

//#2
// app.get('/', (req, res) => {
//  res.send('Hello Express');
// })

module.exports = app;
