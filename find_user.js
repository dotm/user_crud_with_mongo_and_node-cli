//Example CLI usage: node find_user.js --name='User Name' --email=test@example.com

const connectToDB = require('./client.js').connectToDB
const util = require('./util.js')
const exitProcess = util.exitProcess
const exitWithError = util.exitWithError
const USER_COLLECTION = require('./collection_name_constants').USER_COLLECTION

const findUser = (db, queryFilter = {}) => {
    return db.collection(USER_COLLECTION).findOne(queryFilter)
}

let argv = require('minimist')(process.argv.slice(2));
delete argv._

connectToDB
    .then((db)=> findUser(db, argv))
    .then(console.log)
    .then(exitProcess)
    .catch(exitWithError)