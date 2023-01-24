import { View, Text } from 'react-native'

const Divider = ({ show = false, color = 'black' }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
      <View>{show || <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>}</View>
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
    </View>
  )
}

export default Divider
