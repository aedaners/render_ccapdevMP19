const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + "/login.html")
});

app.listen(3000);

//Connect to MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbCCAPDEV19:dbCCAPDEV19@ccapdevmp.pojqxdn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("ccapdevmp").collection("mpdata");
  console.log("Connected to MongoDB");
  client.close();
});