import { Text, TouchableOpacity } from 'react-native'

const SubmitBtn = ({ title, handleSubmit, loading }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'blue',
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        marginHorizontol: 15,
        borderRadius: 10,
      }}
      onPress={handleSubmit}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SubmitBtn
