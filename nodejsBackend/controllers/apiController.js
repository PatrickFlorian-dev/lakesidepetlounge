require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb+srv://lakesidepetloungeadmin:" + process.env.MONNGO_DB_PASSWORD + "@lakesidepetloungecluste.t5325bw.mongodb.net/?retryWrites=true&w=majority";

const addClientApi = ( request, response ) => {

    (async () => {
        let client = await MongoClient.connect(url, { useNewUrlParser: true });

        let db = client.db('lakesidepetlounge');
        
        try {
           const res = await db.collection("clients").insertOne( request.body , { upsert: true });
           response.end( JSON.stringify( res ));
        }
        finally {
            client.close();
        }
    })().catch(err => { 
        response.status(500).send(`Error: ${err}`);
    } );

}

const searchClientByEmailApi = ( request, response ) => {

    (async () => {
        let client = await MongoClient.connect(url, { useNewUrlParser: true });

        let db = client.db('lakesidepetlounge');
        
        try {
           const res = await db.collection("clients").findOne({ email: request.body.email }, { upsert: true });
           response.end( JSON.stringify( res ));
        }
        finally {
            client.close();
        }
    })().catch(err => { 
        response.status(500).send(`Error: ${err}`);
    } );

}

module.exports =  {
    addClientApi,
    searchClientByEmailApi
};