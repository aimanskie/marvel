import { useContext, useState, useLayoutEffect } from 'react'
import { Text, View, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { ProductContext } from '../context/product'
import { useCartContext } from '../context/cart'
import ProductCart from '../components/ProductCard'

const ShopDetails = ({
  route: {
    params: { item },
  },
  navigation,
}) => {
  const {
    products: { product, review },
  } = useContext(ProductContext)

  const [count, setCount] = useState(10000)

  useLayoutEffect(() => {
    navigation.setOptions({ title: item.shopTitle })
  }, [])

  const { storeCartToLocal, handleAddtoCart } = useCartContext()

  const increaseFav = () => {
    setCount((prev) => prev + 1)
  }

  const showAllProduct = () => {
    navigation.navigate('AllProducts')
  }
  const showAllReview = () => {
    navigation.navigate('AllReviews')
  }

  const handleProductDetail = (product) => {
    navigation.navigate('ProductDetail', product)
  }

  const handleRoute = () => {
    storeCartToLocal()
    navigation.navigate('Cart')
  }

  // const handleCart = (oneItem) => {
  //   setTimeout(() => {
  //     handleAddtoCart(oneItem)
  //   }, 500)
  // }

  return (
    <View className='flex-1'>
      <ScrollView>
        <View className='bg-white p-4'>
          <Text>{item.shopTitle}</Text>
          <Text>{item.description}</Text>
          <View className='flex-row self-center gap-2 pt-2'>
            <TouchableOpacity
              className='bg-blue-700 border border-gray-600 py-2 rounded-2xl w-32 flex-row justify-center'
              onPress={increaseFav}
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
        <FlatList
          data={product.slice(0, 8)}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => {
            const { title, description, price, discountedPrice } = item
            return (
              <ProductCart
                handleAddtoCart={handleAddtoCart}
                title={title}
                description={description}
                price={price}
                discountedPrice={discountedPrice}
                handleProductDetail={handleProductDetail}
                item={item}
              />
            )
          }}
          keyExtractor={(item) => item.id}
        />

        <View className='px-4'>
          <TouchableOpacity onPress={showAllProduct} className='border border-gray-200 bg-blue-900 py-2 m-2 '>
            <Text className='text-gray-50 text-center text-xl'>Show All Products</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={review.slice(0, 8)}
          renderItem={({ item }) => {
            const { title, date, content } = item
            return (
              <TouchableOpacity
                // onPress={() => handlePress(item)}
                className='border border-gray-400 rounded-lg bg-gray-200 p-2  gap-1 '
              >
                <Text className='text-2xl'>{title}</Text>
                <Text className='text-gray-400 mb-2'>{date}</Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.id}
        />
        <Text onPress={showAllReview} className='bg-blue-900 mx-4 text-center text-white py-4 my-2'>
          All Reviews
        </Text>
      </ScrollView>
    </View>
  )
}

export default ShopDetails
