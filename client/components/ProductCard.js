import { TouchableOpacity, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const ProductCart = ({ handleProductDetail, title, description, price, discountedPrice, handleAddtoCart, item }) => {
  return (
    <TouchableOpacity
      onPress={() => handleProductDetail({ title, description, price, discountedPrice })}
      className='border border-gray-400 rounded-lg bg-gray-200 p-2 w-1/2 gap-1 my-0.5'
    >
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
    </TouchableOpacity>
  )
}

export default ProductCart
