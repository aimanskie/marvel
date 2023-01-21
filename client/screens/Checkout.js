import { View, Text } from 'react-native'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'
import useAddToCart from '../components/useAddToCart'
import ListCart from '../components/ListCart'
const Checkout = ({ navigation }) => {
  const { cartState, setCartState } = useContext(AuthContext)
  const { cart, total } = useAddToCart()
  return (
    <View>
      <Text>Checkout</Text>
      <Text>Shipping Method</Text>
      <Text>Payment Method</Text>
      <View>
        <ListCart />
      </View>
      <Text onPress={() => navigation.navigate('PlaceOrder')}>Checkout</Text>
    </View>
  )
}

export default Checkout
