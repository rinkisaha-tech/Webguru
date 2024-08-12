// const http = require('http'); //inbuilt module
// const dotenv = require('dotenv');

// dotenv.config();

// const PORT= process.env.port;

// let server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello node js!');
// });

// server.listen(PORT, console.log("server running on port "+PORT));

// const http = require('http'); 
// const dotenv = require('dotenv');
// const express = require('express');
// const app = express();
// dotenv.config();
// const PORT = process.env.PORT;

// app.get('/user', function (req,res){
//     res.send({
//         "message" : "hello express"
//     })
// })

// let server = http.createServer(app);

// server.listen(PORT, function(err){
//     if (err) throw err;
//     console.log('Server is running on port:'+PORT);
// })

// const http = require('http'); 
// const dotenv = require('dotenv');
// const express = require('express');
// const path = require('path')
// const app = express();
// dotenv.config();
// const PORT = process.env.PORT || 8081;

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/user', function (req,res){
//     res.send({
//         "message" : "hello express"
//     })
// })

// let server = http.createServer(app);

// server.listen(PORT, function(err){
//     if (err) throw err;
//     console.log('Server is running on port:'+PORT);
// })


// const http = require('http'); 
// const dotenv = require('dotenv');
// const express = require('express');
// const app = express();
// dotenv.config();
// const PORT = process.env.PORT;

// require('./config/database')();

// app.use(express.static('public'));

// app.get('/user', function (req,res){
//     res.send({
//         "message" : "hello express"
//     })
// })

// let server = http.createServer(app);

// server.listen(PORT, function(err){
//     if (err) throw err;
//     console.log('Server is running on port:'+PORT);
// })

const http = require('http'); 
const dotenv = require('dotenv');
const express = require('express');
var bodyParser = require('body-parser')
const path = require('path')
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const router = require('./routes/api_routes');

app.use(bodyParser.urlencoded({ extended: false}))
 
app.use(bodyParser.json())
require('./config/database')();
app.use(express.static(path.join(__dirname,'public')));

app.use('/api', router.route);

let server = http.createServer(app);

server.listen(PORT, function(err){
    if (err) throw err;
    console.log('Server is running on port:'+ PORT);
});

