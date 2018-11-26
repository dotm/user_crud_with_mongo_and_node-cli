const USER_COLLECTION = require('./collection_name_constants.js').USER_COLLECTION
const ObjectID = require('mongodb').ObjectID;

const deleteUser_byID = (db, id) => {
    return db.collection(USER_COLLECTION).deleteOne(
        {_id: ObjectID(id)},
    )
}

const exportedObject = {
    deleteUser_byID
}
module.exports = exportedObject