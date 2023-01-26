import { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../../screens/SignUp'
import SignIn from '../../screens/SignIn'
import ResetPassword from '../../screens/ResetPassword'
import Home from '../../screens/Home'
import { AuthContext, useAuthContext } from '../../context/auth'
import Header from './Header'
import Profile from '../../screens/Profile'
import Cart from '../../screens/Cart'
import Orders from '../../screens/Orders'
import EditProfile from '../../screens/EditProfile'
import Checkout from '../../screens/Checkout'
import PlaceOrder from '../../screens/PlaceOrder'
import Search from '../../screens/Search'
import ShopDetails from '../../screens/ShopDetails.js'
import Review from '../../screens/Review'
import ProductDetail from '../../screens/ProductDetail'
import AllReviews from '../../screens/AllReviews'
import AllProducts from '../../screens/AllProducts'
const Stack = createNativeStackNavigator()

const Screens = () => {
  const { state } = useAuthContext()
  const authenticated = state?.token !== null

  return (
    <Stack.Navigator initialRouteName='Home'>
      {authenticated ? (
        <>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: true }} />
          <Stack.Screen name='Profile' component={Profile} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='Cart' component={Cart} options={{ headerShown: true, headerBackTitle: 'Back' }} />
          <Stack.Screen name='Orders' component={Orders} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: true, headerBackTitle: 'Back' }} />
          <Stack.Screen
            name='PlaceOrder'
            component={PlaceOrder}
            options={{
              headerShown: true,
              headerBackTitle: '',
            }}
          />
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen
            name='ProductDetail'
            component={ProductDetail}
            options={{ headerShown: true, headerBackTitle: 'Back' }}
          />
          <Stack.Screen
            name='AllReviews'
            component={AllReviews}
            options={{ headerShown: true, headerBackTitle: 'Back' }}
          />
          <Stack.Screen
            name='AllProducts'
            component={AllProducts}
            options={{ headerShown: true, headerBackTitle: 'Back' }}
          />
          <Stack.Screen
            name='ShopDetails'
            component={ShopDetails}
            options={{ headerShown: true, headerRight: () => <Header route='Cart' icon='shoppingcart' /> }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default Screens
