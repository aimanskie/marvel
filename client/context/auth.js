import { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API } from '../config'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    token: null,
  })

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

  const getUser = async () => {
    const { data } = await axios('get-user')
    console.log(data)
    if (data) {
      let data = await AsyncStorage.getItem('@auth')
      const user = JSON.parse(data)
      setState(user)
    } else {
      signOut()
    }
  }

  const storeAuthToLocal = async (data) => {
    await AsyncStorage.setItem('@auth', JSON.stringify(data))
    setState(data)
    return
  }

  const signOut = async () => {
    setState({ token: null })
    await AsyncStorage.removeItem('@auth')
    await AsyncStorage.removeItem('cart')
    return
  }

  const getUserDB = async () => {
    const { data } = await axios(`/get-user?id=${state._id}`)
    setState(data)
    return
  }

  const value = {
    state,
    setState,
    getUser,
    storeAuthToLocal,
    signOut,
    getUserDB,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
