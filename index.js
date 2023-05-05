const express = require("express")
const { connection } = require("./connection/db")
const { markRouter } = require("./Routes/Markcrud.route")
const app = express()
app.use("/marks",markRouter)
app.listen(5200,async(req,res)=>{
try{
await connection
console.log("your server is running on port 5200")
}catch(err){
console.log("please check the network")
}
})