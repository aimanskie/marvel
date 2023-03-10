import { Text, View, Alert } from 'react-native'
import UserInput from '../components/auth/UserInput'
import { useState } from 'react'
import SubmitBtn from '../components/auth/SubmitBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import Divider from '../components/Divider'
import { useAuthContext } from '../context/auth'
const { alert } = Alert

const SignUp = ({ navigation }) => {
  const [values, setValues] = useState({ userName: 'aimanskie', email: 'aimanskie@gmail.com', password: 'aimanskie' })

  const { storeAuthToLocal, setState } = useAuthContext()

  const handleSubmit = async () => {
    const { userName, email, password } = values
    console.log(userName, email, password)
    if (!userName || !email || !password) {
      alert('All fields are required')
      return
    }
    try {
      const { data } = await axios.post(`/signup`, {
        userName,
        email,
        password,
      })
      storeAuthToLocal(data)
      alert('Signup Success')
      navigation.navigate('Home')
    } catch (err) {
      console.log(err)
      alert(err.response.data)
    }
  }

  return (
    <KeyboardAwareScrollView className='px-4 pt-24'>
      <View>
        <Text className='text-blue-800 text-2xl pb-1'>Signup</Text>
        <Text className='pb-2 text-gray-600'>Create you kofo account</Text>
        <View className='pt-4'>
          <UserInput
            placeholder='Username'
            value={values.userName}
            setValues={setValues}
            values={values}
            autoCapitalize='words'
            autoCorrect={false}
            a='userName'
          />
          <UserInput
            placeholder='Email'
            value={values.email}
            setValues={setValues}
            values={values}
            a='email'
            autoCompleteType='email'
            keyboardType='email-address'
          />
          <UserInput
            placeholder='Password'
            value={values.password}
            setValues={setValues}
            values={values}
            a='password'
            secureTextEntry={true}
            autoComplteType='password'
          />
        </View>
        <SubmitBtn title='Create Account' handleSubmit={handleSubmit} />
        <Divider />
        <SubmitBtn title='Create Account with Google' google={true} />
        <Text className='text-center'>
          Already join?{' '}
          <Text onPress={() => navigation.navigate('SignIn')} className='text-blue-800'>
            Sign In
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUp
