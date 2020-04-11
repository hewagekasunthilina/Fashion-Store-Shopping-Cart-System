// module.exports = {
//     DB: 'mongodb://localhost:27017/fashionStore'
// };

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://FashionCluster:fashionstore500@fashioncluster-a2dyx.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
