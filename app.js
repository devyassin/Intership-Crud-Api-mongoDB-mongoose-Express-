const express = require("express");
const router = require("./routes/annonce");
const notFound = require("./middleware/not-found");

// we provide app with express :

const app = express();
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleWare");

// ------ MIDDLEWARE -----------

// we use express.json() for parsing incoming requests with JSON and add the body object to the request object
app.use(express.json());

// we use express.static("./public") to serve static files from the "public" directory relative to the current working directory.
app.use(express.static("./public"));

// ---------- Connection to MongoDB ---------
const connectDB = require("./db/connect");
// we use doteenv for securety raisons to hide sensible informations related to the DB
require("dotenv").config();

// Our routes :
app.use("/api/v1/annonces", router);
app.use(notFound);

const port = process.env.PORT;
const url = process.env.MONGO_URL;
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Serveur Running on ${port} ...`));
  } catch (err) {
    console.log(err);
  }
};

start();
