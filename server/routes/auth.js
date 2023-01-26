import express from 'express'

const router = express.Router()

const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  userUpdate,
  getUser,
} = require('../controllers/auth')

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)
router.put('/update-user', userUpdate)
router.get('/get-user', getUser)

export default router
