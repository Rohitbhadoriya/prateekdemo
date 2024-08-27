const ComplaintModel = require('../models/Complaint')
class UserController {
  static dashboard = async (req, res) => {
    try {
      res.render("user/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  static addcomplaint = async (req, res) => {
    try {
      const data = await ComplaintModel.find()
      
      // console.log(data);

      res.render("user/addcomplaint", { d: data});
    } catch (error) {
      console.log(error);
    }
  };
  static insertcomplaint = async (req, res) => {
    try {
      // console.log("Insert Data")
      //  console.log(req.body)
      const { name, phone, email, model, brand, device, problem, estimated } = req.body
      const r = new ComplaintModel({
        name: name,
        phone:phone,
        email: email,
        model: model,
        brand: brand,
        device: device,
        problem: problem,
        estimated: estimated
      })
      await r.save()
      res.redirect("/user/addcomplaint");
    } catch (error) {
      console.log(error);
    }
  }
  static viewcomaplint = async (req, res) => {
    try {
      const data = await ComplaintModel.findById(req.params.id)
      res.render("user/viewcomplaint", { d: data })

    } catch (error) {
      console.log(error);
    }
  }
  static printcomplaint = async(req,res)=>{
    try{
      const data = await ComplaintModel.findById(req.params.id)
      res.render("user/printcomplaint", { d: data })
    }catch(error){
      console.log(error);
    }
  }
  static editcomplaint = async(req,res)=>{
    try {
      // console.log(req.params.id)
      const data = await ComplaintModel.findById(req.params.id)
      res.render("user/editcomplaint", { d: data })

    } catch (error) {
      console.log(error);
    }
  }
  static updatecomplaint = async (req, res) => {
    try {
      const { name,phone, email, model, brand, device, problem, estimated } = req.body
      const id = req.params.id
      const r = await ComplaintModel.findByIdAndUpdate(id, {
        name: name,
        phone:phone,
        email: email,
        model: model,
        brand: brand,
        device: device,
        problem: problem,
        estimated: estimated,
        })
        res.redirect("/user/addcomplaint");
        } catch (error) {
          console.log(error);
          }
        }
     static deletecomplaint = async (req,res)=>{
      try{
        const data = await ComplaintModel.findByIdAndDelete(req.params.id)
        res.redirect("/user/addcomplaint");

     }catch(error){
      console.log(error);
     } 
}
}
module.exports = UserController;
