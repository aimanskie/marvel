import { useState, useEffect } from 'react'
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native'
import { Entypo } from '@expo/vector-icons'

const Search = ({ navigation }) => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    setShops(createArr)
  }, [])

  const createArr = () => {
    let dataShop = []
    for (let index = 1; index < 30; index++) {
      dataShop.push({
        id: index,
        shopTitle: 'Shop name dolor sit amet consectetor',
        description: 'Shop description : Lorem ipsum dolor sit emet',
      })
    }
    return dataShop
  }

  const handleOneShop = (item) => {
    navigation.navigate('ShopDetails', { item })
  }

  const handleSearch = (text) => {
    if (text === '') return setShops(createArr)
    const filteredShop = createArr().filter((shop) => shop.id === Number(text))
    setShops(filteredShop)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className='flex-row py-2'>
        <Entypo name='shop' size={24} color='black' style={{ paddingTop: 10 }} onPress={() => navigation.goBack()} />
        <Text className='text-2xl pl-2 pt-1 mr-2' onPress={() => navigation.goBack()}>
          Shop
        </Text>
        <View className='bg-gray-200 py-4 w-60'>
          <TextInput
            onChangeText={handleSearch}
            className='text-center text-gray-500'
            placeholder='Search for product or shop name'
          ></TextInput>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FlatList
          data={shops}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => {
            const { shopTitle, description, id } = item
            return (
              <TouchableOpacity
                onPress={() => handleOneShop(item)}
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Search
