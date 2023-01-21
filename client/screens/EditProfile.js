import { useState, useContext, useEffect } from 'react'
import { Text, View, Alert } from 'react-native'
import { AuthContext } from '../context/auth'
import axios from 'axios'
import UserInput from '../components/auth/UserInput'
import SubmitBtn from '../components/auth/SubmitBtn'

const EditProfile = () => {
  const { state, setState } = useContext(AuthContext)
  const [values, setValues] = useState(state)
  const [loading, setLoading] = useState(false)
  const { alert } = Alert

  const handleChange = async () => {
    setLoading(true)
    const { userName, name, phone, email, token } = values
    try {
      const { data } = await axios.put(
        '/update-user',
        { userName, name, phone, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      alert('User Updated')
      setState(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Text>Edit Profile Here</Text>
      <Text>Username</Text>
      <UserInput name='Username' value={values.userName} setValues={setValues} values={values} key='userName' />
      <Text>Name</Text>
      <UserInput name='Name' value={values.name} setValues={setValues} values={values} a='name' />
      <Text>Phone</Text>
      <UserInput name='Phone' value={values.phone} setValues={setValues} values={values} a='phone' />
      <Text>Email</Text>
      <UserInput name='Email' value={values.email} setValues={setValues} values={values} a='email' />
      <SubmitBtn title='Update' handleSubmit={handleChange} loading={loading} />
    </View>
  )
}

export default EditProfile
