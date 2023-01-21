import { useContext } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import { View } from 'react-native'
import { AuthContext } from '../context/auth'

const Home = () => {
  const { cartState, setCartState } = useContext(AuthContext)

  const handlePress = (index) => {
    console.log(index)
    setCartState([...cartState, { title: children[index].title, price: children[index].price }])
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {children.map((child, index) => (
          <View key={`prod-${index}`} style={{ width: '50%', borderWidth: '1px' }}>
            <Text>{child.title}</Text>
            {child.element}
          </View>
        ))}
      </View> */}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterTabs />
      </View>
    </SafeAreaView>
  )
}

export default Home
