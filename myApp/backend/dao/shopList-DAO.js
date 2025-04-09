
require('dotenv').config(); // načte proměnné z .env
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;
const { ObjectId } = require('mongodb'); 


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function display() {
  try {
    const resultDisplay = await client.db("ShopList").collection("shopList").find().toArray(); // převod na pole    
    return resultDisplay; // můžeš i vrátit, pokud chceš s daty dál pracovat
    
  } catch (err) {
    console.error("Chyba při zobrazování shopList:", err);
  }
}


async function create(list)
{
  try {
    _id=new ObjectId()
    list._id=_id
    const resultCreate= await client.db("ShopList").collection("shopList").insertOne(list)
    console.log("Inserted document ID:", resultCreate.insertedId);
    resultCreate= await client.db("ShopList").collection("DashBoard").insertOne(list)
  } catch (err) {
    console.error("Error inserting document:", err);
  } 
}

module.exports = {
    display,
    create
}
    
