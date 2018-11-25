const USER_COLLECTION = require('../utils/collection_name_constants').USER_COLLECTION

const insertUser = (db,user) => {
    const name = user.name
    const email = user.email

    let promise = db.collection(USER_COLLECTION).insertOne({
        name: name,
        email: email
    })
    
    promise.then(() => {
        console.log("Successfully inserted user:", name)
    })

    return promise
}

const exportedObject = {
    insertUser
}
module.exports = exportedObject