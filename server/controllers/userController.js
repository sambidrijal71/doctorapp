const userModel = require('../models/userModel');
const { hashPassword, comparePassword } = require('../helpers/passwordHelper');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    switch (true) {
      case !name: {
        return res.status(200).send({ success: false, message: "Name field is required." });
      }
      case !email: {
        return res.status(200).send({ success: false, message: "Email field is required." });
      }
      case !password: {
        return res.status(200).send({ success: false, message: "Password field is required." });
      }
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({ success: false, message: "User already exists, please login." });
    }
    else {
      const hashedPassword = await hashPassword(password);
      const user = await new userModel({ name, email, password: hashedPassword }).save();
      res.status(201).send({
        success: true, message: "User created successfully. 😊",
        user
      });
    };
  }
  catch (error) {
    console.log(`${error}`.bgRed);
    res.status(500).send({
      success: false,
      message: "Something went wrong in register controller, please try again.",
      error
    });
  };
}


const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(200).send({ success: false, message: "Email field is required." })
    }
    if (!password) {
      return res.status(200).send({ success: false, message: "Password field is required." })
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({ success: false, message: "User does not exist, please enter a valid email." })
    }
    const comparedPassword = await comparePassword(password, user.password);
    if (!comparedPassword) {
      return res.status(200).send({ success: false, message: "Either email or password is invalid, please try again." })
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.status(201).send({
      success: true, message: `Welcome ${user.name}. 😊`,
      user: {
        name: user.name,
        email: user.email
      },
      token
    })
  }
  catch (error) {
    console.log(`${error}`.bgRed);
    res.status(500).send({
      success: false,
      message: "Something went wrong in register controller, please try again.",
      error
    })
  }
}

module.exports = { registerController, loginController }