const EngineerModel = require("../models/Engineer");

class EngineerController{



static  dashboardengineer = async(req,res)=>{
try{
    res.render("engineer/dashboard");
}catch(error){
    console.log(error);
}
}
static addengineer = async(req,res)=>{
    try{
        const engineer = await EngineerModel.find()
        
            res.render("engineer/addengineer", { eng: engineer});
    }catch(error){
        console.log(error);
    }
}
static insertengineer = async(req,res)=>{
    try{
const {name} = req.body
const r = new EngineerModel({
    name: name
})
await r.save()
res.redirect("/engineer/addengineer");
    }catch(error){
        console.log(error);
    }
}
}
module.exports = EngineerController