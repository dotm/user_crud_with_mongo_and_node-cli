const USER_COLLECTION = require('./collection_name_constants.js').USER_COLLECTION
const ObjectID = require('mongodb').ObjectID;

const updateUser_byID = (db, id, updatedFields) => {
    return db.collection(USER_COLLECTION).updateOne(
        {_id: ObjectID(id)},
        {$set: updatedFields},
    )
}

const exportedObject = {
    updateUser_byID
}
module.exports = exportedObject