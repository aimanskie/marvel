import { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../../screens/SignUp'
import SignIn from '../../screens/SignIn'
import ResetPassword from '../../screens/ResetPassword'
import Home from '../../screens/Home'
import { AuthContext } from '../../context/auth'
import Header from './Header'
import Profile from '../../screens/Profile'
import Cart from '../../screens/Cart'
import Orders from '../../screens/Orders'
import EditProfile from '../../screens/EditProfile'
import Checkout from '../../screens/Checkout'
import PlaceOrder from '../../screens/PlaceOrder'
import Search from '../../screens/Search'
import ShopDetails from '../../screens/ShopDetails.js'
const Stack = createNativeStackNavigator()

const Screens = () => {
  const { state } = useContext(AuthContext)
  const authenticated = state?.token !== null

  return (
    <Stack.Navigator initialRouteName='Search' screenOptions={{ headerShown: false }}>
      {authenticated ? (
        <>
          <Stack.Screen name='Home' component={Home} options={{ title: 'Home', headerRight: () => <Header /> }} />
          <Stack.Screen name='Profile' component={Profile} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='Cart' component={Cart} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='Order' component={Orders} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='Checkout' component={Checkout} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='PlaceOrder' component={PlaceOrder} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen
            name='ShopDetails'
            component={ShopDetails}
            options={{ headerShown: true, headerBackTitle: 'Back' }}
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
