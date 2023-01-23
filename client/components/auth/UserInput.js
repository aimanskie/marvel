import { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid'

const UserInput = ({
  placeholder,
  value,
  setValues,
  values,
  a,
  autoCapitalize = 'none',
  keyboardType = 'default',
  secureTextEntry = false,
  password = false,
}) => {
  const [open, setOpen] = useState(true)

  const handleShow = () => {
    setOpen(!open)
  }
  return (
    <View className='mb-2 relative'>
      <TextInput
        className='bg-gray-200 pl-2 border border-gray-900 rounded-lg text-gray-800 py-3'
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={password ? open : secureTextEntry}
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => setValues({ ...values, [a]: text })}
      />
      {password && (
        <View className='absolute right-1 top-1 pt-2 pr-2'>
          {!open && <EyeSlashIcon size={20} onPress={handleShow} />}
          {open && <EyeIcon size={20} onPress={handleShow} />}
        </View>
      )}
    </View>
  )
}

export default UserInput
