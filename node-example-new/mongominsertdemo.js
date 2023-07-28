const { MongoClient } = require('mongodb');

// Replace the following with your actual MongoDB connection string
const uri = 'mongodb://localhost:27017';
const dbName = 'phixmandb';
const collectionName = 'students';

// Sample data to be inserted
const sampleDocument = {
  rno: '1002',
  name: 'stu2',
  // add more key-value pairs as needed
};

async function insertData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert a single document
    const result = await collection.insertOne(sampleDocument);
    console.log('Inserted document id:', result.insertedId);
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    client.close();
  }
}

// Call the insertData function to perform the insertion
insertData();
