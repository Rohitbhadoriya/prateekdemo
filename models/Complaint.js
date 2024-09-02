const mongoose  = require('mongoose')
const ComplaintSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
       
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
    engineer:{
        type:String,
        required:true
    },
    pcharge:{
        type:String,
      
    },
    pdescription:{
        type:String,
        
    },
    scharge:{
        type:String,
        
    },
    remark:{
        type:String,
        
    },
    
    estimated:{
        type:String,
        
    },
    status:{
        type: String,
        default:'process'
    },
    jobNumber: {
        type: String,
        unique: true,
        required: true
      },

    
},{timestamps:true})
const ComplaintModel = mongoose.model('complaint',ComplaintSchema)
module.exports = ComplaintModel