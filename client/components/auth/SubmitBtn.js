import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

// import Svg, { Image } from 'react-native-svg'

const SubmitBtn = ({ title, handleSubmit, google = false }) => {
  const handleGoogle = () => {
    console.log('google')
  }
  return (
    <View className='relative py-2'>
      <TouchableOpacity
        className={
          google
            ? 'border border-gray-600 py-3 rounded-lg my-2'
            : 'border border-gray-600 bg-blue-700 py-3 rounded-lg my-2'
        }
        onPress={google ? handleGoogle : handleSubmit}
      >
        <Text className={google ? 'text-center text-gray' : 'text-center text-white'}>{title}</Text>
      </TouchableOpacity>
      <View className='absolute pt-7 pl-2'>
        {google && <Image source={require('../../screens/img/goo.png')} style={{ width: 20, height: 20 }} />}
      </View>
    </View>
  )
}

export default SubmitBtn