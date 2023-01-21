require('dotenv').config()
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
// import { DATABASE } from './config'
import authRoutes from './routes/auth'

const morgan = require('morgan')
const app = express()

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.DATABASE)
  .then(() => app.listen(8000, () => console.log('Server running on port 8000')))
  .catch((err) => console.log('DB CONNECTION ERROR: ', err))

app.use(express.json({ limit: '4mb' }))
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1', authRoutes)
