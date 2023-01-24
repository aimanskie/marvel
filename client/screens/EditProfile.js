import { useState } from 'react'
import { Text, View, Alert, TextInput } from 'react-native'
import { useAuthContext } from '../context/auth'
import axios from 'axios'
import SubmitBtn from '../components/auth/SubmitBtn'
import { useNavigation } from '@react-navigation/native'

const { alert } = Alert

const EditProfile = () => {
  const { state, setState } = useAuthContext()
  const [values, setValues] = useState(state)
  const navigation = useNavigation()

  const handleSubmit = async () => {
    const { userName, name, phone, email, address, token, _id } = values
    try {
      const { data } = await axios.put(
        '/update-user',
        { userName, name, phone, email, address, _id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      alert('User Updated')
      navigation.goBack()
      setState(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className='flex-1'>
      <View className='bg-white px-4 py-4 my-2'>
        <Text className='text-gray-500'>Username</Text>
        <TextInput
          onChangeText={(text) => setValues((prev) => ({ ...prev, userName: text }))}
          value={values.userName}
          className='border border-gray-300 py-3 pl-3 mt-2'
        />
        <Text className='text-gray-500 pt-2'>Email</Text>
        <TextInput
          onChangeText={(text) => setValues((prev) => ({ ...prev, email: text }))}
          value={values.email}
          className='border border-gray-300 py-3 pl-3 mt-2'
        />
        <Text className='text-gray-500 pt-2'>Name</Text>
        <TextInput
          onChangeText={(text) => setValues((prev) => ({ ...prev, name: text }))}
          value={values.name}
          className='border border-gray-300 py-3 pl-3 mt-2'
        />
        <Text className='text-gray-500 pt-2'>Phone</Text>
        <TextInput
          onChangeText={(text) => setValues((prev) => ({ ...prev, phone: text }))}
          value={values.phone}
          className='border border-gray-300 py-3 pl-3 mt-2'
        />
        <Text className='text-gray-500 pt-2'>Address</Text>
        <TextInput
          onChangeText={(text) => setValues((prev) => ({ ...prev, address: text }))}
          value={values.address}
          className='border border-gray-300 py-3 pl-3 mt-2'
        />
      </View>
      <View className='flex-1 justify-end '>
        <SubmitBtn title='Save' handleSubmit={handleSubmit} />
      </View>
    </View>
  )
}

export default EditProfile
