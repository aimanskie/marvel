import { useEffect } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import { FontAwesome5 } from '@expo/vector-icons'
import { useCartContext } from '../context/cart'
import { useAuthContext } from '../context/auth'

const Orders = () => {
  const { getTotalPrice } = useCartContext()
  const { getUser, state } = useAuthContext()

  // useEffect(() => {
  //   getUser()
  // }, [])

  const data = [
    { order: Math.floor(Math.random() * 100000), date: new Date().toLocaleDateString(), orderPrice: 300 },
    { order: Math.floor(Math.random() * 100000), date: new Date().toLocaleDateString(), orderPrice: 300 },
    { order: Math.floor(Math.random() * 100000), date: new Date().toLocaleDateString(), orderPrice: 300 },
    { order: Math.floor(Math.random() * 100000), date: new Date().toLocaleDateString(), orderPrice: 300 },
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {getTotalPrice() > 0 && state?.orderNum ? (
        <>
          <View className='flex-row bg-white p-4 my-1'>
            <FontAwesome5 name='list-alt' size={16} color='purple' />
            <Text className='px-2'>Processing</Text>
          </View>
          <View className='bg-white px-4 space-y-1'>
            <Text>Order Progress : #{state?.orderNum?.number && state.orderNum.number}</Text>
            <Text>Order date : {state?.orderNum?.date && state.orderNum.date}</Text>
            <Text>RM {getTotalPrice()}</Text>
          </View>
        </>
      ) : (
        <View className='flex-row bg-white p-4 my-1'>
          <FontAwesome5 name='list-alt' size={16} color='purple' />
          <Text className='px-2'>No New Orders</Text>
        </View>
      )}

      <View className='flex-row bg-white p-4 my-1'>
        <FontAwesome5 name='check-circle' size={16} color='purple' />
        <Text className='px-2'>Completed</Text>
      </View>

      {data.map((item, index) => {
        const { order, date, orderPrice } = item
        return (
          <View className='bg-white px-4 flex-row  my-0.5' key={`order-${index}`}>
            <View className='space-y-1'>
              <Text className='w-32'>Order No {order}</Text>
              <Text>Order date : {date}</Text>
              <Text className='font-bold text-blue-600'>RM {orderPrice}</Text>
            </View>
            <View className='ml-auto self-center'>
              <Text className='bg-blue-700 p-2 rounded-lg text-white '>Reorder</Text>
            </View>
          </View>
        )
      })}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterTabs />
      </View>
    </SafeAreaView>
  )
}

export default Orders
