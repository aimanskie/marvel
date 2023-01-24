import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema(
  {
    success: Boolean,
    accessToken: String,
    refreshToken: String,
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      default: '',
      trim: true,
    },
    phone: {
      type: String,
      default: '',
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    address: {
      type: String,
      default: 'lorem ipsum dolor sit amet, consectetur adipsicing elit',
    },
    eWalletBalance: {
      type: Number,
      default: 200,
    },
    roles: {
      type: [String],
      default: ['Customer'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
