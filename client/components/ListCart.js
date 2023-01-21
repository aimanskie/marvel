import { Text, View } from 'react-native'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'
const ListCart = () => {
  const { cart } = useContext(AuthContext)
  return (
    <View>
      {cart.map((item, index) => {
        let [title, info] = item
        let { number, price } = info
        return (
          <View key={index}>
            <Text>number of item : {number}</Text>
            <Text>title of product : {title}</Text>
            <Text>price : {price}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default ListCart
