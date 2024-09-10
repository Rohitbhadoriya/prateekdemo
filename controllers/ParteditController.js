const ComplaintModel = require("../models/Complaint");

class ParteditController{
static partdisplay = async(req,res)=>{
    try{
        const{_id: userId,name,image} = req.data1
        const data = await ComplaintModel.find({ user: userId });

res.render("user/partdisplay",{d:data, nm:name,img:image})
    }catch(error){
        console.log(error);
    }
}
static partedit = async(req,res)=>{
    try{
        const{name,image} = req.data1
  console.log(req.params.id)
  const data = await ComplaintModel.findById(req.params.id);
  res.render("user/editpart",{d:data,nm:name,img:image});
    }catch(error){
        console.log(error);
    }
}
static updatepart = async(req,res)=>{
    try{
        const {
            estimated,
            pcharge,
            pdescription,
            scharge,
            
          } = req.body;
          const id = req.params.id
          const datra = await ComplaintModel.findByIdAndUpdate(id,{
            estimated:estimated,
            pcharge:pcharge,
            pdescription:pdescription,
            scharge:scharge,
        });
        res.redirect("/user/partdisplay");
    }catch(error){
console.log(error);
    }

}
}
module.exports = ParteditController