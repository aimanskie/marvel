import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './context/auth'
import Screens from './components/nav/Screens'
import { ProductProvider } from './context/product'
import { CartProvider } from './context/cart'
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Screens />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
