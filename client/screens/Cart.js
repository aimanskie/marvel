import { View, Text, SafeAreaView } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAddToCart from '../components/useAddToCart'
import ListCart from '../components/ListCart'
const Cart = ({ navigation }) => {
  const { setCartState, setCart } = useContext(AuthContext)
  const { total, cart } = useAddToCart()
  const handleClear = async () => {
    await AsyncStorage.removeItem('cart')
    setCart([])
    setTotal(null)
    setCartState([])
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text center>Cart Page</Text>
      <Text>
        <ListCart />
        {total ? <Text>total : RM {total}</Text> : <Text>No Products</Text>}
      </Text>
      <Text onPress={handleClear}>Clear Cart</Text>
      <Text onPress={() => navigation.navigate('Checkout')}>Select Shipping and Payment</Text>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterTabs />
      </View>
    </SafeAreaView>
  )
}

export default Cart
