import { SafeAreaView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useCartContext } from '../../context/cart'

const Header = ({ route, icon }) => {
  const { storeCartToLocal } = useCartContext()
  const navigation = useNavigation()
  const handleRoute = () => {
    storeCartToLocal()
    navigation.navigate(route)
  }

  return (
    <SafeAreaView>
      <TouchableOpacity>
        {/* <FontAwesome5Icon name='sign-out-alt' color='#ff9900' /> */}
        <AntDesign name={icon} size={20} color='purple' onPress={handleRoute} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header
