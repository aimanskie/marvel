import React from 'react'
import { View, TextInput } from 'react-native'

const UserInput = ({
  name,
  value,
  setValues,
  values,
  a,
  autoCapitalize = 'none',
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      {/* <Text semi>{name}</Text> */}
      <TextInput
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={{
          borderWidth: 0.5,
          height: 48,
          borderBottomColor: '#8e93a1',
          marginBottom: 30,
        }}
        value={value}
        placeholder={name}
        onChangeText={(text) => setValues({ ...values, [a]: text })}
      />
    </View>
  )
}

export default UserInput
