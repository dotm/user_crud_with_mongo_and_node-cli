const USER_COLLECTION = require('../utils/collection_name_constants').USER_COLLECTION

const findUser = (db, queryFilter = {}) => {
    return db.collection(USER_COLLECTION).findOne(queryFilter)
}

const exportedObject = {
    findUser
}
module.exports = exportedObject