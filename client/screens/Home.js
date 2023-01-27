import { Image, SafeAreaView, Text, ScrollView } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Home = ({ navigation }) => {
  const handleSearch = () => {
    navigation.navigate('Search')
    console.log('press')
  }

  return (
    <SafeAreaView className='flex-1'>
      <View className='bg-blue-500 p-4 '>
        <Text className='text-2xl text-center pb-2'>KOFU AUTO PARTS</Text>
        <View className='bg-gray-300 py-4 '>
          <Text onPress={handleSearch} className='text-center text-gray-500'>
            Search for product or shop name
          </Text>
        </View>
        <View className='absolute mt-2 pt-16 pl-6'>
          <AntDesign name='search1' size={20} color='grey' />
        </View>
      </View>
      <ScrollView className='px-1 pt-2 gap-2 '>
        <Image source={require('./img/1.jpg')} style={{ height: 90, width: '98%' }} />
        <Image source={require('./img/2.jpg')} style={{ height: 90, width: '98%' }} />
        <Image source={require('./img/3.jpg')} style={{ height: 90, width: '98%' }} />
        <Image source={require('./img/4.jpg')} style={{ height: 90, width: '98%' }} />
      </ScrollView>
      <View className='flex-1 justify-end'>
        <FooterTabs />
      </View>
    </SafeAreaView>
  )
}

export default Home
