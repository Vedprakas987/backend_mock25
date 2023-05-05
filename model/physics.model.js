const mongoose = require("mongoose")
const userSchema=mongoose.Schema(
    {
     marks:String,
     name:String,   
    }
)

const SubjectModal = mongoose.model("marksCollection",userSchema)
module.exports={
    SubjectModal
}