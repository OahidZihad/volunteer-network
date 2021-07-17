const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9wgmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const eventCollection = client.db("volunteer").collection("events");

  app.post("/addEvent", (req, res) => {
    const newEvent = req.body;
    console.log("adding new event: ", newEvent);
    eventCollection.insertOne(newEvent).then((result) => {
      console.log("inserted count", result.insertedCount);
      res.send(result.insertedCount > 0);
    });
  });

  app.get("/events", (req, res) => {
    eventCollection.find().toArray((err, items) => {
      res.send(items);
    });
  });

  app.delete("/deleteEvent/:id", (req, res) => {
    // const id = ObjectId(req.params.id);
    // console.log("delete this", id);
    eventCollection
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => res.send(result.deletedCount > 0));
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
