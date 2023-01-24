import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import Divider from '../components/Divider'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useCartContext } from '../context/cart'
import { useAuthContext } from '../context/auth'

const PlaceOrder = ({ navigation }) => {
  const { getCart, cartDisplay, getTotalPrice } = useCartContext()
  const { getUser, state, storeAuthToLocal } = useAuthContext()
  const [orderNum, setOrderNum] = useState({})

  useEffect(() => {
    getCart()
    getUser()
    orderNumber()
  }, [])

  const orderNumber = () => {
    let random = Math.floor(Math.random() * 100000)
    setOrderNum({ number: random, date: new Date().toLocaleDateString() })
  }

  const handlePress = () => {
    storeAuthToLocal({ ...state, orderNum })
    navigation.navigate('Orders')
  }

  return (
    <View>
      <View className='bg-white py-2 mt-2'>
        <AntDesign name='checksquare' size={90} color='purple' style={{ alignSelf: 'center' }} />
        <Text className='text-center'>Your Order has been placed!!</Text>
      </View>
      <View className='bg-white py-2 mt-2 px-4'>
        <Text className=''>Order Details</Text>
        <View className='flex-row mt-2'>
          <Text className='text-gray-500'>Your order number</Text>
          <Text className='px-2 rounded-full text-purple-500  bg-purple-200 ml-auto'>#{orderNum.number}</Text>
        </View>
        <View className='flex-row my-2 '>
          <Text className='text-gray-500'>Delivery Address</Text>
          <Text className='ml-auto w-32'>{state.address}</Text>
        </View>
        <Divider show={true} color='lightgray' />
        <View className='mt-2 '>
          {cartDisplay.map((item, idx) => {
            const { number, description, id, title, price } = item
            return (
              <View className='flex-row pb-2' key={`order-${idx}`}>
                <Text className='mr-2'>{number}x</Text>
                <Text className='text-xs'>{title} </Text>
                <Text className='ml-auto'>RM {price * number}</Text>
              </View>
            )
          })}
        </View>
        <Divider show={true} color='lightgray' />
        <View className='flex-row mb-1 text-gray-200 my-2'>
          <Text className='text-gray-600'>Subtotal</Text>
          <Text className='ml-auto text-gray-600'>RM {getTotalPrice()}</Text>
        </View>
        <View className='flex-row mb-2'>
          <Text className='text-gray-600'>Delivery</Text>
          <Text className='ml-auto text-gray-600'>RM 15</Text>
        </View>
        <Divider show={true} color='lightgray' />
        <View className='flex-row mt-4'>
          <Text className='text-gray-600 '>Total</Text>
          <Text className='ml-auto text-gray-600'>RM {getTotalPrice() + 15}</Text>
        </View>
      </View>
      <TouchableOpacity className='my-4 bg-blue-600 py-4 mx-3' onPress={handlePress}>
        <Text className=' text-center text-white font-bold'>COMPLETE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PlaceOrder
