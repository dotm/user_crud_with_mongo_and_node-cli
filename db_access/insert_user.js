//Example CLI usage: node insert_user.js --name='User Name' --email=test@example.com

const connectToDB = require('../utils/client.js').connectToDB
const util = require('../utils/util.js')
const exitProcess = util.exitProcess
const exitWithError = util.exitWithError
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

let argv = require('minimist')(process.argv.slice(2));

let user={
    name: argv.name,
    email: argv.email,
}

connectToDB
    .then((db)=> insertUser(db,user))
    .then(exitProcess)
    .catch(exitWithError)