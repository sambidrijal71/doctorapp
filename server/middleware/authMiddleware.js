const jwt = require('jsonwebtoken')

const requireSignIn = async (req, res, next) => {

  try {
    const user = req.headers['authorization'].split(" ")[1]
    jwt.verify(user, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        return (res.status(200).send({ success: false, message: "Authentication failed" }))
      }
      else {
        req.body.userId = decode.id
        next()
      }
    })
  }
  catch (error) {
    console.log(`${error}`.bgRed);
    return (res.status(200).send({ success: false, message: "Something went wrong in authenticating user." })),
      error
  }
}

module.exports = requireSignIn