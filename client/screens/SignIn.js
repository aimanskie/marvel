import { View, Alert, Text } from 'react-native'
import UserInput from '../components/auth/UserInput'
import { useLayoutEffect, useState, useContext } from 'react'
import SubmitBtn from '../components/auth/SubmitBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import Divider from '../components/Divider'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { alert } = Alert
import { AuthContext } from '../context/auth.js'
import { SparklesIcon, XMarkIcon } from 'react-native-heroicons/solid'

const SignIn = ({ navigation }) => {
  const [userName, setUserName] = useState('aimanskie')
  const [password, setPassword] = useState('aimanskie')
  const [loading, setLoading] = useState(false)
  const { state, setState } = useContext(AuthContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const handleSubmit = async () => {
    setLoading(true)
    if (!userName || !password) {
      alert('All fields are required')
      setLoading(false)
      return
    }
    try {
      const { data } = await axios.post(`/signin`, {
        userName,
        password,
      })
      await AsyncStorage.setItem('@auth', JSON.stringify(data))
      setState(data)
      setLoading(false)
      alert('Sign in Success')
      navigation.navigate('Home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <KeyboardAwareScrollView>
        <View className='relative'>
          <XMarkIcon />
          <Text className='text-red-500 text-2xl'>Let's get your started!'</Text>
          <Text>Continue to your kofo account</Text>
          <UserInput
            name='Username'
            value={userName}
            setValue={setUserName}
            autoCapitalize='words'
            autoCorrect={false}
          />
          <UserInput
            name='Password'
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            autoComplteType='password'
          />
          <SubmitBtn title='Continue' handleSubmit={handleSubmit} loading={loading} />
          <Text>Remember me</Text>
          <Text onPress={() => navigation.navigate('ResetPassword')}>Forgot password?</Text>
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
            <Text>Continue with Google</Text>
          </View>
          <Text>
            Don't have an account? <Text onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default SignIn
