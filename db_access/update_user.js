//Example CLI usage:
//  node update_user.js ObjectID --name='User Name' --email=test@example.com
//  node update_user.js ObjectID --name='User Name'
//  node update_user.js ObjectID --email=test@example.com

const connectToDB = require('../utils/client.js').connectToDB
const util = require('../utils/util.js')
const exitProcess = util.exitProcess
const exitWithError = util.exitWithError
const USER_COLLECTION = require('../utils/collection_name_constants').USER_COLLECTION
const ObjectID = require('mongodb').ObjectID;

const updateUser_byID = (db, id, updatedFields) => {
    return db.collection(USER_COLLECTION).updateOne(
        {_id: ObjectID(id)},
        {$set: updatedFields},
    )
}

let argv = require('minimist')(process.argv.slice(2));
let user_id = argv._[0]
delete argv._

connectToDB
    .then((db)=> updateUser_byID(db, user_id, argv))
    .then(console.log)
    .then(exitProcess)
    .catch(exitWithError)