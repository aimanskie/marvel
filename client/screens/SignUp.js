import { Text, View, Alert } from 'react-native'
import UserInput from '../components/auth/UserInput'
import { useState, useContext } from 'react'
import SubmitBtn from '../components/auth/SubmitBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import Divider from '../components/Divider'
import { AuthContext } from '../context/auth'
const { alert } = Alert

const SignUp = ({ navigation }) => {
  const [values, setValues] = useState({ userName: 'aimanskie', email: 'aimanskie@gmail.com', password: 'aimanskie' })

  const [loading, setLoading] = useState(false)
  const { setState } = useContext(AuthContext)

  const handleSubmit = async () => {
    const { userName, email, password } = values
    setLoading(true)
    if (!userName || !email || !password) {
      alert('All fields are required')
      setLoading(false)
      return
    }
    try {
      const { data } = await axios.post(`/signup`, {
        userName,
        email,
        password,
      })
      alert('Signup Success')
      setState(data)
      navigation.navigate('Home')
    } catch (err) {
      alert(err.response.data)
    }
  }

  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ marginVertical: 100 }}>
          <Text>Signup</Text>
          <Text>Create you kofo account</Text>
          <UserInput
            name='Username'
            value={values.Username}
            setValues={setValues}
            values={values}
            autoCapitalize='words'
            autoCorrect={false}
            a='userName'
          />
          <UserInput
            name='Email'
            value={values.Email}
            setValues={setValues}
            values={values}
            a='email'
            autoCompleteType='email'
            keyboardType='email-address'
          />
          <UserInput
            name='Password'
            value={values.Password}
            setValues={setValues}
            values={values}
            a='password'
            secureTextEntry={true}
            autoComplteType='password'
          />
          <SubmitBtn title='Create Account' handleSubmit={handleSubmit} loading={loading} />
          <Divider />
          <View
            style={{
              marginTop: 10,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'black',
              height: 50,
              marginBottom: 20,
              justifyContent: 'center',
              marginHorizontol: 15,
              borderRadius: 10,
            }}
          >
            <Text>Create Account with Google</Text>
          </View>
          <Text>
            Already join? <Text onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default SignUp
