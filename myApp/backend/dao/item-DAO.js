
require('dotenv').config(); // načte proměnné z .env
const { MongoClient, ServerApiVersion } = require('mongodb');
<<<<<<< Updated upstream
const uri = "";
=======
const uri = process.env.MONGO_URI;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

>>>>>>> Stashed changes

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function add(item)
{
   
  try {
    const resultItem= await client.db("ShopList").collection("items").insertOne(item)
    
    console.log("Inserted document ID:", resultItem.insertedId);
  } catch (err) {
    console.error("Error inserting document:", err);
  } 
}
module.exports={
  add
}
