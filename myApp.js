let express = require('express');
let app = express();


//#3
app.get('/', (req, res) => {
 let absolutePath = __dirname + '/views/index.html';
 res.sendFile(absolutePath);
})

//#2
// app.get('/', (req, res) => {
//  res.send('Hello Express');
// })

module.exports = app;
