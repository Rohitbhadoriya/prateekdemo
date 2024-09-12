
const UserModel = require("../models/User");
const bcrypt = require('bcrypt')
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'dvhcd5oaz',
  api_key: '377969336692132',
  api_secret: 'ck52LMl4pM1JvZikeMw0cZNtx00'
})
const jwt = require('jsonwebtoken');








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
      // console.log(req.files.image);
      const file = req.files.image
      const imageupload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "loginimage"
      })
      // console.log(imageupload);

      const { name, email, password,address,phone,cpassword } = req.body;
      const user = await UserModel.findOne({ email: email });
      // console.log(user)
      if (user) {
        res.redirect("/register");
      } else {
        if (name && email && password && cpassword && address && phone) {
          if (password && cpassword) {
            const hashpassword = await bcrypt.hash(password, 10)
            const r = new UserModel({
              name: name,
              email: email,
              address:address,
              phone:phone,
              password: hashpassword,
              image: {
                public_id: imageupload.public_id,
                url: imageupload.secure_url,
              }
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
      //  console.log(req.body)
      // const { email, password } = req.body;
      // const user = await UserModel.findOne({ email: email });
      // if (user != null) {
      //   const isMatch = await bcrypt.compare(password, user.password);
      //   if (isMatch) {

      //     const token  = jwt.sign({ID:user._id},'prateek@1995')
      //     // console.log(token);
      //     res.cookie('token',token)
      //     res.redirect("/user/dashboard");
      //     } else {
      //       res.redirect("/login");
      //       }
      //       } else {
      //         res.redirect("/login");
      //         }
      const { email, password } = req.body;
      if ((email && password)) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const ismatched = await bcrypt.compare(password, user.password)
          // const ismatched = true
          // console.log(ismatched);
          if (ismatched) {
            if (user.role == 'admin') {
              //generate token for security
              const token = jwt.sign({ ID: user._id }, 'prateek@1995')
              // console.log(token)
              //for cookies
              res.cookie('token', token)
              res.redirect("/admin/dashboard");
            }
            if (user.role == 'user') {
              //generate token for security
              const token = jwt.sign({ ID: user._id }, 'prateek@1995')
              // console.log(token)
              //for cookies
              res.cookie('token', token)
              res.redirect("/user/dashboard")
            }
            if (user.role == 'engineer') {
              //generate token for security
              const token = jwt.sign({ ID: user._id }, 'prateek@1995')
              // console.log(token)
              //for cookies
              res.cookie('token', token)
              res.redirect("/engineer/dashboard")
            } else {
              res.redirect('/login')
            }
          } else {

            res.redirect('/login')
          }

        } else {

          res.redirect('/login')
        }
      } else {

        res.redirect('/login')
      }

    } catch (error) {
      console.log(error);
    }
  };


  


  static logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.redirect('/')
    } catch (error) {
      console.log(error);
    }
  }

}
module.exports = FrontController;
