const USER_COLLECTION = require('./collection_name_constants.js').USER_COLLECTION

const findUser = (db, queryFilter = {}) => {
    return db.collection(USER_COLLECTION).findOne(queryFilter)
}

const exportedObject = {
    findUser
}
module.exports = exportedObject