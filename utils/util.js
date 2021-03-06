const exitProcess = ()=>{
    console.log("\nProcess exited without error\n")
    process.exit()
}
const exitWithError = (error) => {
    console.log(error)
    process.exit(1)
}

const exportedObject = {
    exitProcess,
    exitWithError,
}
module.exports = exportedObject