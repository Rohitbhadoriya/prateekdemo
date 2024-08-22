const UserModel = require("../models/User");
class FrontController {
  static home = async (req, res) => {
    try {
      res.render("home");
    } catch (error) {
      console.log(error);
    }
  };
  static regitser = async (req, res) => {
    try {
      res.render("register");
    } catch (error) {
      console.log(error);
    }
  };
  static login = async (req, res) => {
    try {
      res.render("login");
    } catch (error) {
      console.log(error);
    }
  };
  static userInsert = async (req, res) => {
    try {
      // console.log("Insert Data")
      // console.log(req.body)
      const { name, email, password, cpassword } = req.body;
      const user = await UserModel.findOne({ email: email });
      // console.log(user)
      if (user) {
        res.redirect("/register");
      } else {
        if (name && email && password && cpassword) {
          if (password && cpassword) {
            const r = new UserModel({
              name: name,
              email: email,
              password: password,
            });
            await r.save();
            res.redirect("/login");
          } else {
            res.redirect("/register");
          }
        } else {
          res.redirect("/register");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  static verifylogin = async (req, res) => {
    try {
      res.redirec("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = FrontController;
