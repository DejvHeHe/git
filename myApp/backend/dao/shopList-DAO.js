
require('dotenv').config(); // načte proměnné z .env
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;



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
async function update(item, targetList) {
  try {
    const filter = { name: targetList.name }; // nebo přímo: { name: item.shopList }
    const update = { $push: { items: item } };

    const resultUpdate = await client.db("ShopList").collection("shopList").updateOne(filter, update);
    return resultUpdate;
  } catch (err) {
    console.error(err);
  }
}



async function create(list)
{
  try {
    
    const resultCreate= await client.db("ShopList").collection("shopList").insertOne(list)
    console.log("Inserted document ID:", resultCreate.insertedId);
    
  } catch (err) {
    console.error("Error inserting document:", err);
  } 
}

module.exports = {
    display,
    create,
    update
}
    
