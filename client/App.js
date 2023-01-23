import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './context/auth'
import Screens from './components/nav/Screens'
import { ProductProvider } from './context/product'
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ProductProvider>
          <Screens />
        </ProductProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
