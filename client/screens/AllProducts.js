import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useCartContext } from '../context/cart'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const { handleAddtoCart } = useCartContext()

  useEffect(() => {
    setProducts(createProductArr)
  }, [])
  const createProductArr = () => {
    let dataProducts = []
    for (let index = 1; index < 30; index++) {
      dataProducts.push({
        id: index,
        title: 'Shop name dolor sit amet consectetor',
        description: 'Shop description : Lorem ipsum dolor sit emet',
        price: 50,
        discountedPrice: 31,
      })
    }
    return dataProducts
  }

  return (
    <>
      <View className='flex-row bg-white p-5'>
        <MaterialIcons name='shopping-bag' size={16} color='purple' />
        <Text>Product ({products.length})</Text>
      </View>
      <View>
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => {
            const { title, description, price, discountedPrice } = item
            return (
              <View className='border border-gray-400 rounded-lg bg-gray-200 p-2 w-1/2 gap-1 my-0.5'>
                <Text className='text-2xl'>{title}</Text>
                <Text className='text-gray-400 mb-2'>{description}</Text>
                <View className='flex-row'>
                  <Text className='mr-2 line-through'>${price}</Text>
                  <Text className='text-purple-600 '>${discountedPrice}</Text>
                  <AntDesign
                    name='pluscircleo'
                    size={16}
                    color='purple'
                    style={{ marginLeft: 'auto' }}
                    onPress={() => handleAddtoCart(item)}
                  />
                </View>
              </View>
            )
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  )
}

export default AllProducts
