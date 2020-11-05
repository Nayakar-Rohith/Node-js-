const assert=require('assert');

exports.insertDocument=(db,document,collection,callback)=>{
    const coll = db.collection(collection)
    coll.insert(document,(err,succ)=>{
        assert.equal(err,null);
        console.log("successfully inserted in "+collection)
        callback(succ);
    })
};
exports.deleteDocument=(db, document, collection,callback)=>{
    const coll = db.collection(collection);
    coll.deleteOne(document,(err,succ)=>{
        assert.equal(err,null);
        console.log("successfully deleted in "+ collection)
        callback(succ);
    })
}
exports.updateDocument=(db,document,updatedDoc,collection,callback)=>{
    const coll = db.collection(collection);
    coll.updateOne(document,{$set:updatedDoc},null,(err,succ)=>{
        assert.equal(err,null);
        console.log("successfully deleted in "+ collection)
        callback(succ);
    });
}
exports.getDocuments=(db,collection,callback)=>{
    const coll = db.collection(collection);
    coll.find().toArray((err,succ)=>{
        assert.equal(err,null);
        callback(succ)})
}