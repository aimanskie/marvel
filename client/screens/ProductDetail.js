import { Text, View } from 'react-native'
import { useCartContext } from '../context/cart'

const ProductDetail = (props) => {
  const { title, description, price, discountedPrice } = props.route.params

  const { handleAddtoCart } = useCartContext()
  const product = { title, description, price, discountedPrice }
  return (
    <>
      <View className='bg-white my-2 p-5'>
        <Text className='text-2xl'>{title}</Text>
        <Text className='text-gray-400 mb-2'>{description}</Text>
        <View className='flex-row'>
          <Text className='text-purple-600 '>${discountedPrice}</Text>
          <Text className='mr-2 line-through'>${price}</Text>
        </View>
      </View>
      <View className='bg-white  p-5'>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
      <Text onPress={() => handleAddtoCart(product)} className='bg-blue-900 mx-4 text-center text-white py-4 my-2'>
        Add to Cart{' '}
      </Text>
    </>
  )
}

export default ProductDetail
