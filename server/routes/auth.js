import express from 'express'

const router = express.Router()

// controllers
const { signup, signin, forgotPassword, resetPassword, userUpdate, checkSignIn } = require('../controllers/auth')

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)
router.put('/update-user', checkSignIn, userUpdate)
// router.put('/authenticate', renewToken)
// router.get('/authenticate', checkToken)

export default router
