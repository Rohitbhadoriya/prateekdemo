const mongoose  = require('mongoose')
const EngineerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

},{timestamps:true})
const EngineerModel = mongoose.model('engineer',EngineerSchema)
module.exports = EngineerModel