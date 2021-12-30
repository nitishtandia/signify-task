const express = require('express');

//adding cors so client can access it we can add many options in here 
const cors = require('cors')

//express async errors so that we dont have to write try catch block in controller file it's automatically included
require("express-async-errors");
const app = express()
app.use(cors())

process.on("uncaughtException", (ex) => {
  console.log('An uncaught Exception found', ex);
  process.exit(1);
});

process.on("unhandledRejection", (ex) => {
  throw ex;
});

const reviewRouter = require("./route/routes");
const errorHandler = require("./middleware/error");

//DB url
let MONGO_URL;
if (process.env.NODE_ENV === 'test') {
  MONGO_URL = process.env.TEST_MONGO_URL ? process.env.TEST_MONGO_URL : "mongodb://localhost:27017/signifyTEST";
} else {
  MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost:27017/signify";
}
console.log(MONGO_URL);
db = require('./DB/db')(MONGO_URL);

app.use(express.json());

//routes
app.use('/review', reviewRouter);

//error middleware so we can handle all error at one place
app.use(errorHandler)


module.exports = app;