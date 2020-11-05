const DB = require("./operations");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";
MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
  
    console.log("Connected correctly to server");
  
    const db = client.db(dbname);
    var data = { "name": "rohith", "from": "NLG" };
    //mongoDB operations.......... start
    // DB.insertDocument(db, data, "dishes", succ => {
    //   console.log("success in inserting", succ);
    // });
    // DB.deleteDocument(db,data,'dishes',(succ)=>{
    //   console.log("success in deleting", succ);
    // })
    // DB.updateDocument(db,data,{"from":"NLG"},'dishes',(succ)=>{
    //   console.log("success in deleting", succ);
    // })
    // DB.getDocuments(db,'dishes',(succ)=>{
    //   console.log("All Documents", succ);
    // })
    //mongoDB operations.......... end
  });
  