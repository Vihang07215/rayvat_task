const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user_list = await User.findOne({ email });
    if (user_list) {
      return res.status(400).json({ message: "user with this email exists" });
    }

    const hased = await bcrypt.hash(password, 8);
    const createdUser = await User.create({
      name,
      email,
      password: hased,
      role,
    });
    return res.status(201).json(createdUser);
  } catch (err){
    return res.status(500).json({ message: `Server error :${err.message}` });
  }
};


exports.login = async (req,res) =>{
  try{
 const {  email, password } = req.body;

    const user_list = await User.findOne({ email });
    if (!user_list) {
      return res.status(400).json({ message: "user with this email not  exists" });
    }
      const match = await bcrypt.compare(password,user_list.password);
      if(!match) return res.status(400).json({ message: "password is invalid" });
      
      const token = jwt.sign ({
        id:user_list.id,
        email:user_list.email
      },
      process.env.JWT_SECRET ,{expiresIn : "1d"}
    );
    return res.status(200).json(token)
  }
   catch (err){
    return res.status(500).json({ message: `Server error :${err.message}` });
  }
}


