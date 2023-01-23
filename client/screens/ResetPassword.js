import { Text, View, Alert, SafeAreaView } from 'react-native'
import UserInput from '../components/auth/UserInput'
import { useState, useLayoutEffect } from 'react'
import SubmitBtn from '../components/auth/SubmitBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
const { alert } = Alert
import { XMarkIcon } from 'react-native-heroicons/solid'

const ResetPassword = ({ navigation }) => {
  const [values, setValues] = useState({ userName: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [resetCheck, setResetCheck] = useState(false)

  const handleSubmit = async () => {
    const { userName, email, password } = values
    setLoading(true)
    if (resetCheck) {
      try {
        const { data } = await axios.post(`/reset-password`, {
          password,
          userName,
          email,
        })
        alert('reset password success')
        setResetCheck(false)
        navigation.navigate('SignIn')
      } catch (err) {
        alert(err.response.data)
      }
    } else {
      if (!userName || !email) {
        alert('All fields are required')
        setLoading(false)
        return
      }
      try {
        const { data } = await axios.post(`/forgot-password`, {
          userName,
          email,
        })
        if (data.ok) setResetCheck(true)
        console.log(resetCheck, userName, email)
      } catch (err) {
        if (err.response.data) alert('there are no users')
      }
    }
  }

  return (
    <KeyboardAwareScrollView className='px-4'>
      <SafeAreaView>
        <View className='pt-5'>
          <XMarkIcon onPress={() => navigation.navigate('SignIn')} />
        </View>
        <View className='pt-28'>
          <Text className='text-blue-800 text-2xl pb-1'>Reset password</Text>
          <Text className='pb-2 text-gray-600'>Enter your username and email to reset password</Text>
          {!resetCheck ? (
            <View className='pt-3'>
              <UserInput
                placeholder='Username'
                value={values.userName}
                setValues={setValues}
                values={values}
                a='userName'
                autoCorrect={false}
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
            </View>
          ) : (
            <UserInput
              name='Password'
              value={values.password}
              setValues={setValues}
              values={values}
              a='password'
              secureTextEntry={true}
              autoComplteType='password'
            />
          )}
          <SubmitBtn title='Continue' handleSubmit={handleSubmit} loading={loading} />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ResetPassword
