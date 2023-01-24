import { View, Text, SafeAreaView } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import { useEffect } from 'react'
import { useCartContext } from '../context/cart'
import { AntDesign } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Cart = ({ navigation }) => {
  const { storeCartToLocal, getTotalPrice, decrease, increase, cartDisplay, getCart } = useCartContext()

  useEffect(() => {
    getCart()
  }, [])

  const handlePress = () => {
    storeCartToLocal()
    navigation.navigate('Checkout')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {cartDisplay?.map((list) => {
        const { id, number, title, discountedPrice, price } = list
        return (
          <View className='flex-row bg-white border-b-gray-600 py-3 my-0.5 mt-2' key={id}>
            <View className='border  flex-row m-auto border-gray-100'>
              <AntDesign
                name='minuscircle'
                size={12}
                color='purple'
                onPress={() => decrease(id, number)}
                style={{ padding: 2 }}
              />
              <Text className=''>{number}</Text>
              <AntDesign
                name='pluscircle'
                size={12}
                color='purple'
                onPress={() => increase(id)}
                style={{ padding: 2 }}
              />
            </View>
            <Text className='m-auto'>{title}</Text>
            <View className='ml-auto pr-2'>
              <Text className='text-xs line-through text-gray-400'>{price}</Text>
              <Text>{discountedPrice}</Text>
            </View>
          </View>
        )
      })}
      {cartDisplay ? (
        <View className='bg-white py-4 flex-row my-1'>
          <Text className='pl-2'>Subtotal</Text>
          <Text className='ml-auto pr-2'>Total Price : RM {getTotalPrice()}</Text>
        </View>
      ) : (
        <View className='bg-white py-4  my-1'>
          <Text className='text-center'>Nothing in Cart</Text>
        </View>
      )}
      {cartDisplay ? (
        <Text onPress={handlePress} className='bg-blue-900 mx-4 text-center text-white py-4 my-2'>
          Select Shipping and Payment
        </Text>
      ) : (
        ''
      )}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterTabs />
      </View>
    </SafeAreaView>
  )
}

export default Cart
