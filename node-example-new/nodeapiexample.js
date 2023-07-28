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

app.get("/stu/:id", async (request, response) => {
        var result= await  collection.findOne({ "_id": new ObjectId(request.params.id)}).toArray();
        response.send(result);
    });


app.post("/studata", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});
app.put("/stu/:id", (request, response) => {
    collection.updateOne({ "_id": new ObjectId(request.params.id) },{$set:request.body}, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.delete("/stu/:id", (request, response) => {
    collection.remove({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

