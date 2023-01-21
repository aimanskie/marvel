import { Text, View, SafeAreaView } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import uuid from 'react-native-uuid'
import { useState } from 'react'

const Orders = () => {
  const [iD, setID] = useState('')
  const [orderComplete, setOrderComplete] = useState([])

  const data = [
    { order: uuid.v4(), date: new Date().toLocaleDateString(), orderPrice: 300 },
    { order: uuid.v4(), date: new Date().toLocaleDateString(), orderPrice: 300 },
    { order: uuid.v4(), date: new Date().toLocaleDateString(), orderPrice: 300 },
    { order: uuid.v4(), date: new Date().toLocaleDateString(), orderPrice: 300 },
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Order Page</Text>

      {data.map((item) => {
        const { order, date, orderPrice } = item
        return (
          <View>
            <Text>Order No {order}</Text>
            <Text>Order date : {date}</Text>
            <Text>HK {orderPrice}</Text>
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
