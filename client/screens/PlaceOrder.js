import { Text, View } from 'react-native'
import ListCart from '../components/ListCart'
const PlaceOrder = () => {
  return (
    <View>
      <Text>Your Order has been placed</Text>
      <ListCart />
    </View>
  )
}

export default PlaceOrder
