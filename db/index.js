const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/showDB";

mongoose
  .connect(MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

