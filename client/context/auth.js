import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API } from '../config'
import { G } from 'react-native-svg'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    token: null,
  })
  const [cartState, setCartState] = useState([])
  const [cart, setCart] = useState([])

  axios.defaults.baseURL = API

  useEffect(() => {
    const loadFromAsyncStorage = async () => {
      let data = await AsyncStorage.getItem('@auth')
      if (data) {
        const user = JSON.parse(data)
        setState(user)
      }
    }
    loadFromAsyncStorage()
  }, [])

  const value = {
    cart,
    setCart,
    state,
    setState,
    cartState,
    setCartState,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
