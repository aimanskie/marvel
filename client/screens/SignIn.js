import { View, Alert, Text } from 'react-native'
import UserInput from '../components/auth/UserInput'
import { useState } from 'react'
import SubmitBtn from '../components/auth/SubmitBtn'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import Divider from '../components/Divider'
const { alert } = Alert
import { useAuthContext } from '../context/auth.js'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native'
import Checkbox from 'expo-checkbox'

const SignIn = ({ navigation }) => {
  const [values, setValues] = useState({ userName: 'aimanskie', password: 'aimanskie' })
  const { setState, storeAuthToLocal } = useAuthContext()
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = async () => {
    const { userName, password } = values
    if (!userName || !password) {
      alert('All fields are required')
      return
    }
    try {
      const { data } = await axios.post(`/signin`, {
        userName,
        password,
      })
      storeAuthToLocal(data)
      alert('Sign in Success')
      navigation.navigate('Home')
    } catch (err) {
      console.log(err)
      alert(err.response.data)
    }
  }

  return (
    <KeyboardAwareScrollView className='px-4'>
      <SafeAreaView>
        <View className='pt-5'>
          <XMarkIcon onPress={() => navigation.navigate('SignUp')} />
        </View>
        <View className='pt-32 '>
          <Text className='text-blue-800 text-2xl pb-1'>Let's get your started!</Text>
          <Text className='pb-2 text-gray-600'>Continue to your kofo account</Text>
          <UserInput
            placeholder='Username'
            value={values.userName}
            setValues={setValues}
            values={values}
            a='userName'
            autoCorrect={false}
          />
          <UserInput
            placeholder='Password'
            value={values.password}
            setValues={setValues}
            values={values}
            a='password'
            secureTextEntry={true}
            password={true}
          />
          <View className='flex-row space-x-28'>
            <View className='flex-row'>
              <Checkbox
                className='h-4 w-4'
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? 'blue' : undefined}
              />
              <Text className='pl-1'>Remember me</Text>
            </View>
            <Text className='text-blue-800' onPress={() => navigation.navigate('ResetPassword')}>
              Forgot password?
            </Text>
          </View>
          <SubmitBtn title='Continue' handleSubmit={handleSubmit} />
          <Divider />
          <View>
            <SubmitBtn title='Continue with Google' google={true} />
          </View>
          <Text className='text-center'>
            Don't have an account?
            <Text onPress={() => navigation.navigate('SignUp')} className='text-blue-800'>
              Sign Up
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default SignIn
