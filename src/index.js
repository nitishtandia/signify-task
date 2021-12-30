const http = require('http');
require("dotenv").config({path:__dirname+'/../.env'});

const app = require('./server')

module.exports = http.createServer(app).listen(process.env.PORT | 8080);