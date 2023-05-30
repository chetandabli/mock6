const { UserModel } = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name && !email && !password) {
    res.status(400).send("please provide all details");
    return;
  }
  const isExist = await UserModel.findOne({ email: email });
  if (isExist) {
    res.status(400).send("user already exist");
    return;
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) throw err;
        const newUser = new UserModel({ name, email, password: hash });
        await newUser.save();
        res.status(201).send("user is registered!");
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(400).send("please provide all details");
    return;
  }

  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      res.status(400).send("user not registered");
      return;
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) throw err;
        const token = jwt.sign({ email: user.email }, process.env.secretKey, {
          expiresIn: "1h",
        });
        res.status(201).json({ token, message: "user logged in!" });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
