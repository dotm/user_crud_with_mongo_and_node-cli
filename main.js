const connectToDB = require('./client.js').connectToDB
const exitProcess = ()=>{
    console.log("\nProcess exit without error\n")
    process.exit()
}
const exitWithError = (error) => {
    console.log(error)
    process.exit(1)
}

const insertUser = (db) => {
    return new Promise((resolve,reject) => {
        db.collection("user").insertOne({
            name: "Test",
            email: "test@yopmail.com"
        }, (error,result) => {
            if(error){
                console.log("Error inserting document", error)
                reject(error)
                return
            }
    
            resolve(db)
        })
    })
}

connectToDB
    .then(insertUser)
    .then(exitProcess)
    .catch(exitWithError)