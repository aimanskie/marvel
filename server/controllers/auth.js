import User from '../models/user'
import { hashPassword, comparePassword } from '../helpers/auth'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
require('dotenv').config()

export const checkSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
})

export const signup = async (req, res) => {
  console.log('HIT SIGNUP')
  try {
    const { userName, email, password } = req.body
    if (!userName) return res.status(400).send('Username is required')
    if (!email) return res.status(400).send('Email is required')
    if (!password || password.length < 6) return res.status(400).send('Password should be 6 characters long')

    const exist = await User.findOne({ userName, email })
    if (exist) return res.status(400).send('Email is taken')
    const hashedPassword = await hashPassword(password)
    try {
      const user = await new User({
        userName,
        email,
        password: hashedPassword,
      }).save()
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      })

      const { password, ...rest } = user._doc
      return res.json({
        ...rest,
        token,
      })
    } catch (err) {
      console.log(err)
    }
  } catch (err) {
    console.log(err)
  }
}

export const signin = async (req, res) => {
  try {
    const { userName, password } = req.body
    const user = await User.findOne({ userName })
    if (!user) {
      return res.status(400).send('No user found')
    }
    const match = await comparePassword(password, user.password)
    if (!match) {
      return res.status(400).send('Wrong password')
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    })
    user.password = undefined
    const { password: userPassword, ...rest } = user._doc

    res.json({
      ...rest,
      token,
    })
  } catch (err) {
    console.log(err)
    return res.status(400).send('Error. Try again.')
  }
}

export const forgotPassword = async (req, res) => {
  const { userName, email } = req.body
  const user = await User.findOne({ userName, email })
  if (!user) {
    return res.json({ error: 'User not found' })
  }
  user.save()
  try {
    res.json({ ok: true })
  } catch (err) {
    console.log(err)
    res.json({ ok: false })
  }
}

export const resetPassword = async (req, res) => {
  try {
    const { userName, email, password } = req.body
    console.log(userName, email, password)
    const user = await User.findOne({ email, userName })
    if (!user) {
      return res.status(400).send('Email or reset code is invalid')
    }
    if (!password || password.length < 6) {
      return res.status(400).send('Password should be 6 characters long')
    }
    const hashedPassword = await hashPassword(password)
    user.password = hashedPassword
    user.save()
    return res.json({ ok: true })
  } catch (err) {
    console.log(err)
  }
}

export const userUpdate = async (req, res) => {
  try {
    const { userName, name, phone, email } = req.body
    const data = await User.findOneAndUpdate({ _id: req.user._id }, { userName, name, phone, email }, { new: true })
    // console.log(data)
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
}
