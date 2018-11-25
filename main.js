const connectToDB = require('./utils/client.js').connectToDB
const util = require('./utils/util.js')
const exitProcess = util.exitProcess
const exitWithError = util.exitWithError

const insertUser = require('./db_access/insert_user').insertUser
const findUser = require('./db_access/find_user').findUser
const updateUser_byID = require('./db_access/update_user').updateUser_byID
const deleteUser_byID = require('./db_access/delete_user').deleteUser_byID

let user = {
    name: "Yoshua",
    email: "yo@yo.com",
}
let db = undefined
connectToDB
    .then((database) => {
        db = database
        return insertUser(db, user)
    })
    .then(result => {
        user._id = result.ops[0]._id
    })
    .then(() => findUser(db, {_id: user._id}))
    .then(result => {
        console.log("User Inserted")
        console.log(result)
        return result._id
    })
    .then(user_id => updateUser_byID(db, user_id, {name: "Yoshua Elmaryono"}))
    .then(() => findUser(db, {_id: user._id}))
    .then(result => {
        console.log("User Updated")
        console.log(result)
        return result._id
    })
    .then(() => deleteUser_byID(db, user._id))
    .then(result => {
        console.log("User Deleted")
    })
    .then(exitProcess)
    .catch(exitWithError)