//Example CLI usage:
//  node delete_user.js  ObjectID

const connectToDB = require('../utils/client.js').connectToDB
const util = require('../utils/util.js')
const exitProcess = util.exitProcess
const exitWithError = util.exitWithError
const USER_COLLECTION = require('../utils/collection_name_constants').USER_COLLECTION
const ObjectID = require('mongodb').ObjectID;

const deleteUser_byID = (db, id) => {
    return db.collection(USER_COLLECTION).deleteOne(
        {_id: ObjectID(id)},
    )
}

let argv = require('minimist')(process.argv.slice(2));
let user_id = argv._[0]

connectToDB
    .then((db)=> deleteUser_byID(db, user_id))
    .then(console.log)
    .then(exitProcess)
    .catch(exitWithError)