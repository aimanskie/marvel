import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import Divider from '../components/Divider'
import { useCartContext } from '../context/cart'
import { TextInput } from 'react-native'
import { useAuthContext } from '../context/auth'

// import { AuthContext } from '../context/auth'
// import { useContext } from 'react'
// import useAddToCart from '../components/useAddToCart'
// import ListCart from '../components/ListCart'

const Checkout = ({ navigation }) => {
  const { getCart, cartDisplay, getTotalPrice } = useCartContext()
  const { state, setState, storeAuthToLocal } = useAuthContext()
  const [isEdit, setIsEdit] = useState(false)
  useEffect(() => {
    getCart()
  }, [])

  const handlePress = () => {
    storeAuthToLocal(state)
    navigation.navigate('PlaceOrder')
  }

  const handleOnChange = (text) => {
    setState((prev) => {
      return { ...prev, address: text }
    })
  }

  return (
    <View className='flex-1 mb-5'>
      <View className='bg-white px-4 my-2'>
        <View className='flex-row mt-4'>
          <Ionicons name='location-sharp' size={16} color='purple' />
          <Text>Shipping Method</Text>
        </View>
        <View className='flex-row my-3 self-center'>
          <Text className='bg-blue-600 p-2 px-14'>Delivery</Text>
          <Text className='p-2 px-14 border border-gray-400 bg-white'>Mailbox</Text>
        </View>
        <Text>Address name</Text>
        <View className='flex-row py-1 pb-4'>
          {isEdit || <Text className='text-xs'>{state.address}</Text>}
          {isEdit && (
            <TextInput className='text-xs' onChangeText={handleOnChange}>
              {state.address}
            </TextInput>
          )}
          <AntDesign
            name='edit'
            size={16}
            color='black'
            style={{ marginLeft: 'auto', paddingRight: 2 }}
            onPress={() => setIsEdit(!isEdit)}
          />
        </View>
      </View>
      <View className='bg-white px-4 mb-2 '>
        <View className='flex-row mt-4'>
          <AntDesign name='wallet' size={16} color='purple' />
          <Text className='pl-1'>Payment Method</Text>
        </View>
        <View className='flex-row my-3 self-center'>
          <Text className='bg-blue-600 p-2 px-14'>Stripe</Text>
          <Text className='p-2 px-14 border border-gray-400 bg-white'>E-Wallet</Text>
        </View>
      </View>
      <View className='bg-white px-4 mb-2 '>
        <View className='flex-row mt-4'>
          <Ionicons name='receipt' size={16} color='purple' />
          <Text className='pl-1'>Order Summary</Text>
        </View>
        <View className='my-3 '>
          {cartDisplay.map((item, idx) => {
            const { number, description, id, title, price } = item
            return (
              <View key={`order-${idx}`}>
                <View className='flex-row pb-2'>
                  <Text className='mr-2'>{number}x</Text>
                  <Text>{title} </Text>
                  <Text className='ml-auto'>RM {price * number}</Text>
                </View>
              </View>
            )
          })}
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
        </View>
      </View>
      <View className='flex-row px-4 bg-white py-5'>
        <Text className='text-gray-600 '>Total</Text>
        <Text className='ml-auto text-blue-600 font-bold'>RM {getTotalPrice() + 15}</Text>
      </View>
      <TouchableOpacity className='flex-1 justify-end mb-2'>
        <Text onPress={handlePress} className='bg-blue-800 py-4 mx-4 text-center text-white text-l'>
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Checkout
