import { useEffect } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import { useAuthContext } from '../context/auth'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const Profile = ({ navigation }) => {
  const { getUserDB, state, setState, signOut } = useAuthContext()

  useEffect(() => {
    getUserDB()
  }, [])

  const { userName, name, phone, email, eWalletBalance, address } = state

  const handleSignOut = () => {
    signOut()
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity className='bg-white flex-row px-2 py-3 my-1' onPress={() => navigation.navigate('EditProfile')}>
        <FontAwesome name='user' size={16} color='purple' />
        <Text className='pl-2'>Personal Information</Text>
        <AntDesign name='right' size={16} color='purple' style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
      <View className='my-0.5 bg-white space-y-2 px-4 py-2'>
        <Text className='text-gray-500'>Username : </Text>
        <Text>{userName}</Text>
      </View>
      <View className='my-0.5 bg-white space-y-2 px-4 py-2'>
        <Text className='text-gray-500'>Email : </Text>
        <Text>{email}</Text>
      </View>
      <View className='my-0.5 bg-white space-y-2 px-4 py-2'>
        <Text className='text-gray-500'>Name : </Text>
        <Text>{name}</Text>
      </View>
      <View className='my-0.5 bg-white space-y-2 px-4 py-2'>
        <Text className='text-gray-500'>Phone : </Text>
        <Text>{phone}</Text>
      </View>
      <View className='my-0.5 bg-white space-y-2 px-4 py-2'>
        <Text className='text-gray-500'>Address : </Text>
        <Text>{address}</Text>
      </View>
      <TouchableOpacity className='bg-white flex-row px-2 py-3 my-1' onPress={() => navigation.navigate('EditProfile')}>
        <AntDesign name='wallet' size={16} color='purple' />
        <Text className='pl-2'>E-Wallet</Text>
        <AntDesign name='right' size={16} color='purple' style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
      <View className=' bg-white  px-4 py-2'>
        <Text className='font-bold'>RM {eWalletBalance}</Text>
      </View>
      <TouchableOpacity className='bg-white flex-row px-2 py-3 my-1'>
        <MaterialIcons name='language' size={16} color='purple' />
        <Text className='pl-2'>Language</Text>
        <AntDesign name='right' size={16} color='purple' style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
      <TouchableOpacity className='bg-white flex-row px-2 py-3 my-1' onPress={handleSignOut}>
        <MaterialIcons name='logout' size={16} color='purple' />
        <Text className='pl-2'>Logout</Text>
        <AntDesign name='right' size={16} color='purple' style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterTabs />
      </View>
    </ScrollView>
  )
}

export default Profile
