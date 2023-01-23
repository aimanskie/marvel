import { useState, useLayoutEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const ShopDetails = ({
  route: {
    params: { item },
  },
  navigation,
}) => {
  const [shop, setShop] = useState(item)
  const [count, setCount] = useState(10000)
  useLayoutEffect(() => {
    navigation.setOptions({ title: shop.shopTitle })
  }, [])
  const [review, setReview] = useState([])

  const increase = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <View>
      <View className='bg-white p-4'>
        <Text>{shop.shopTitle}</Text>
        <Text>{shop.description}</Text>
        <View className='flex-row self-center gap-2 pt-2'>
          <TouchableOpacity
            className='bg-blue-700 border border-gray-600 py-2 rounded-2xl w-32 flex-row justify-center'
            onPress={increase}
          >
            <AntDesign name='heart' size={16} color='white' />
            <Text className='text-slate-100 pl-2'>{(count > 1000 ? count / 1000 : count).toFixed(2)}k</Text>
          </TouchableOpacity>
          <View className='bg-blue-700 border border-gray-600 py-2 rounded-2xl w-32 flex-row justify-center'>
            <MaterialIcons name='feedback' size={16} color='white' />
            <Text className='text-slate-100 pl-2'>{review.length}</Text>
          </View>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <FlatList
            data={dataArr}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({ item }) => {
              const { shopTitle, description, id } = item
              return (
                <TouchableOpacity
                  onPress={() => handlePress(item)}
                  className='border border-gray-400 rounded-lg bg-gray-200 p-2 w-1/2 gap-1 my-0.5'
                >
                  <Text className='mb-2 text-2xl'>{shopTitle}</Text>
                  <Text>{description}</Text>
                  <Text>id - {id}</Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default ShopDetails
