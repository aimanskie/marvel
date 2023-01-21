import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const Tab = ({ name, text, handlePress, screenName, route }) => {
  const active = screenName === route && 'blue'
  return (
    <TouchableOpacity>
      <>
        <FontAwesome5
          name={name}
          size={25}
          style={{ alignSelf: 'center', marginBottom: 3 }}
          onPress={handlePress}
          color={active}
        />
        <Text>{text}</Text>
      </>
    </TouchableOpacity>
  )
}

const FooterTabs = () => {
  const navigation = useNavigation()
  const { name: route } = useRoute()

  return (
    <>
      <Divider />
      <View style={{ flexDirection: 'row', margin: 10, marginHorizontal: 30, justifyContent: 'space-between' }}>
        <Tab name='home' text='Home' handlePress={() => navigation.navigate('Home')} screenName='Home' route={route} />
        <Tab
          name='cart-plus'
          text='Cart'
          handlePress={() => navigation.navigate('Cart')}
          screenName='Cart'
          route={route}
        />
        <Tab
          name='receipt'
          text='Order'
          handlePress={() => navigation.navigate('Order')}
          screenName='Order'
          route={route}
        />
        <Tab
          name='user-alt'
          text='Profile'
          handlePress={() => navigation.navigate('Profile')}
          screenName='Profile'
          route={route}
        />
      </View>
    </>
  )
}

export default FooterTabs
