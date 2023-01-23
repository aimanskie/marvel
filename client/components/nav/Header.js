import AsyncStorage from '@react-native-async-storage/async-storage'
import { useContext } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from '../../context/auth'

const Header = () => {
  const { state, setState } = useContext(AuthContext)

  const handleSignOut = async () => {
    setState({ token: null })
    await AsyncStorage.removeItem('@auth')
    await AsyncStorage.removeItem('cart')
  }

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <FontAwesome5Icon name='sign-out-alt' color='#ff9900' onPress={handleSignOut} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header
