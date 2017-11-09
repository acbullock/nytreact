const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Aritcles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    "title" : "Chasing Coral",
    "url" : "https://www.nytimes.com/video/movies/100000005156873/chasing-coral.html",
    "date" : new Date(Date.now())
  },
  {
    "title" : "Review: ‘Stranger Things’ Returns, More Familiar but Still Fun",
    "url" : "https://www.nytimes.com/2017/10/26/arts/television/stranger-things-2-review-netflix.html",
    "date": new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
