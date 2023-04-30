const express = require('express');
const { registerController, loginController, getUserDataController } = require('../controllers/userController');
const requireSignIn = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerController)
router.post('/login', loginController)

router.post('/getUserData', requireSignIn, getUserDataController)




module.exports = router