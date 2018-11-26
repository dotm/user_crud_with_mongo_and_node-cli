//Example CLI usage: node find_user.js --name='User Name' --email=test@example.com

const connectToDB = require('../db_access/client.js').connectToDB
const util = require('../utils/util.js')
const exitProcess = util.exitProcess
const exitWithError = util.exitWithError
const findUser = require('./db_access/find_user').findUser

let argv = require('minimist')(process.argv.slice(2));
delete argv._

connectToDB
    .then((db)=> findUser(db, argv))
    .then(console.log)
    .then(exitProcess)
    .catch(exitWithError)