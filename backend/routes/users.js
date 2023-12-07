const express = require('express')

const { signUpUser, loginUser, verificationLink, forgotPasswordLink, resetPassword } = require('../controllers/userController')

const router = express.Router()

router.post('/register', signUpUser)
router.post('/login', loginUser)
router.get(':id/verify/:token', verificationLink)
router.get('/:email/reset', forgotPasswordLink)
router.patch('/resetpassword', resetPassword)





module.exports = router