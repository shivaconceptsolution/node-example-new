const Express = require("express");
const { MongoClient, Collection } = require('mongodb');
const BodyParser = require("body-parser");
//const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL ="mongodb://localhost:27017/" ;
const DATABASE_NAME = "phixmandb";
var app = Express();
var cors = require('cors')
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var db, collection;
app.listen(5000, () => {
         const client = new MongoClient(CONNECTION_URL);
         client.connect();

          db = client.db(DATABASE_NAME);
          collection = db.collection("students");
          console.log("Connected to `" + DATABASE_NAME + "`!");
    });
   

app.get("/studata", async (request, response) => {
        var result = await collection.find({}).toArray();
        response.send(result);
    });

app.get("/studata/:id", async (request, response) => {
        var result= await collection.findOne({"rno":request.params.id});
        response.send(result);
    });


app.post("/studata", async (request, response) => {
       var result = await collection.insertOne(request.body);
        response.send(result);
});

app.put("/studata/:id", async (request, response) => {
    var result = await collection.updateOne({"rno":request.params.id},{$set:request.body});
    response.send(result);
    });


app.delete("/studata/:id", async (request, response) => {
   var result = await collection.deleteOne({ "rno":request.params.id});
        response.send(result);
    });

