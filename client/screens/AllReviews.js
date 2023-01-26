import { Text, View, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const AllReviews = ({ navigation }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(createReviewArr)
  }, [])
  const createReviewArr = () => {
    let data = []
    for (let index = 1; index < 30; index++) {
      data.push({
        id: Math.floor(Math.random() * 1000000),
        date: new Date().toLocaleDateString(),
        description: 'Shop description : Lorem ipsum dolor sit emet',
      })
    }
    return data
  }

  return (
    <>
      <View className='flex-row bg-white p-5'>
        <MaterialIcons name='rate-review' size={16} color='purple' />
        <Text>Reviews ({reviews.length})</Text>
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          const { id, date, description } = item
          return (
            <View className='border border-gray-400 rounded-lg bg-gray-200 p-2  gap-1'>
              <View className='flex-row'>
                <Text className='text-sm text-gray-500 pr-2'>Username {id}</Text>
                <Text className='text-sm text-gray-500'>{date}</Text>
              </View>
              <Text className='text-l mb-2'>{description}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default AllReviews
