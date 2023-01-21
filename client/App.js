import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './context/auth'
import Screens from './components/nav/Screens'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

export default function App() {


  return (
    <NavigationContainer>
      <AuthProvider>
        <Screens />
      </AuthProvider>
    </NavigationContainer>
  )
}
