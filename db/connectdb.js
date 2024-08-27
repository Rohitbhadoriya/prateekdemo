const mongoose = require('mongoose')
  const url = 'mongodb://127.0.0.1:27017/prateekmobilecrm'

const live_url = "mongodb+srv://rohitbhadauriya575:6B1IZN6LIHDGdt4n@cluster0.i0raj.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0"
const connectdb = ()=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log('Mongodb Connected')
    })
    .catch((error)=>{
console.log(error)
    })
}
module.exports = connectdb