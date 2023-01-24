import express from 'express'

const router = express.Router()

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  userUpdate,
  // checkSignIn,
  getUser,
} = require('../controllers/auth')

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)
router.put('/update-user', userUpdate)
router.get('/get-user', /* checkSignIn */ getUser)
// router.put('/authenticate', renewToken)
// router.get('/authenticate', checkToken)

export default router
