const mongoose  = require('mongoose')
const ComplaintSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
        },
    model:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    device:{
        type:String,
        required:true
    },
    problem:{
        type:String,
        required:true
    },
    estimated:{
        type:String,
        required:true
    },
    
},{timestamps:true})
const ComplaintModel = mongoose.model('complaint',ComplaintSchema)
module.exports = ComplaintModel