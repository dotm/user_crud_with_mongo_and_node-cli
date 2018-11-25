const connectToDB = require('./client.js').connectToDB
const exitProcess = ()=>{
    console.log("\nProcess exit without error\n")
    process.exit()
}
const exitWithError = (error) => {
    console.log(error)
    process.exit(1)
}

const insertUser = (db,user) => {
    return new Promise((resolve,reject) => {
        const name = user.name
        const email = user.email

        db.collection("user").insertOne({
            name: name,
            email: email
        }, (error,result) => {
            if(error){
                console.log("Error inserting document", error)
                reject(error)
                return
            }
    
            console.log("Successfully inserted user:", name)
            resolve(db)
        })
    })
}

let user = {
    name: "Joe",
    email: "joe@yopmail.com"
}
connectToDB
    .then((db)=> insertUser(db,user))
    .then(exitProcess)
    .catch(exitWithError)