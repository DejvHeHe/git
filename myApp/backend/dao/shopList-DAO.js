

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Dejv:fnY9a4RsBfE.Mbe@shoplist.zhfar8m.mongodb.net/?appName=ShopList";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


function get(ID)
{O
  client.db.shopList.find({ _id: bjectId(ID) })
}
async function create(list)
{
    try {
      const result= client.db("ShopList").collection("shopList").insertOne(list)
      console.log("Inserted document ID:", result.insertedId);
    } catch (err) {
        console.error("Error inserting document:", err);
    } finally {
        await client.close(); // Always close the connection
    }
}

module.exports = {
    get,
    create
}
    
