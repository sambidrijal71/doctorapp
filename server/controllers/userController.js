const userModel = require('../models/userModel')

const registerController = async (req, res) => {
  try { }
  catch (error) {
    console.log(`${error}`.bgRed);
    res.status(500).send({
      success: false,
      message: "Something went wrong in register controller, please try again.",
      error
    })
  }
}


const loginController = async (req, res) => {
  try { }
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