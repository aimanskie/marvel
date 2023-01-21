import { Text, View, Alert } from 'react-native'
import UserInput from '../components/auth/UserInput'
import { useState } from 'react'
import SubmitBtn from '../components/auth/SubmitBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
const { alert } = Alert
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
    <>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ marginVertical: 100 }}>
          <Text>Reset password</Text>
          <Text>Enter your username and email to reset password</Text>
          {!resetCheck ? (
            <>
              <UserInput
                name='Username'
                value={values.userName}
                setValues={setValues}
                values={values}
                a='userName'
                autoCorrect={false}
              />
              <UserInput
                name='Email'
                value={values.email}
                setValues={setValues}
                values={values}
                a='email'
                autoCompleteType='email'
                keyboardType='email-address'
              />
            </>
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
          <Text onPress={() => navigation.navigate('SignIn')}>Back</Text>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default ResetPassword
