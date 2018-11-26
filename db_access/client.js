const MongoClient = require('mongodb').MongoClient

const dev_connectionUrl = 'mongodb://localhost:27017/'
const dev_dbName = 'user_YE25Nov2018_0930'

const dbName = dev_dbName
const url = dev_connectionUrl + dbName

let db = undefined

const initializeConnection = (resolve,reject) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error,client) => {
        if(error){
            console.error("Error connecting to MongoDB","\n\n", error,"\n\n")
            reject(error)
            return
        }
        
        console.log("Connected successfully to MongoDB")
    
        db = client.db(dbName)
        resolve(db)
    })
}
const connectToDB = new Promise((resolve,reject) => {
    if(db){
        resolve(db)
    }else{
        initializeConnection(resolve,reject)
    }
})

const exportedObject = {
    connectToDB
}
module.exports = exportedObject