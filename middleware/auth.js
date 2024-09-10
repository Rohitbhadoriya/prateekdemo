const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')


const checkUserAuth = async(req,res,next)=>{
// console.log("Hello User Auth");
const {token} = req.cookies
if (!token){
    return res.redirect('/')
   }
   else{
    const verify_token = jwt.verify(token,'prateek@1995')
    // console.log(verify_token);
   const userdata  = await UserModel.findOne({_id:verify_token.ID})
   console.log(userdata);
   req.data1 = userdata;
    next()
   }
}
module.exports = checkUserAuth