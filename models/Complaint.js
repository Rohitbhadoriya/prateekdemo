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
    mode:{
        type:String,
        
    },
    
    estimated:{
        type: Number, 
        default: 0
        
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
      createdAt: {
        type: Date,
        default: Date.now
      },
      deliveredAt:{
        type:Date,
      },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
 
    
},{timestamps:true})
const ComplaintModel = mongoose.model('complaint',ComplaintSchema)
module.exports = ComplaintModel