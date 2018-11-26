//Example CLI usage: node insert_user.js --name='User Name' --email=test@example.com

const connectToDB = require('../db_access/client.js').connectToDB
const util = require('../utils/util.js')
const exitProcess = util.exitProcess
const exitWithError = util.exitWithError
const insertUser = require('./db_access/insert_user').insertUser

let argv = require('minimist')(process.argv.slice(2));

let user={
    name: argv.name,
    email: argv.email,
}

connectToDB
    .then((db)=> insertUser(db,user))
    .then(exitProcess)
    .catch(exitWithError)