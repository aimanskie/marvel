import { useState, useContext, createContext } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartDisplay, setCartDisplay] = useState([])
  const { alert } = Alert

  const handleAddtoCart = (item) => {
    if (!item.number) {
      processCart([...cartDisplay, { ...item, number: 1 }])
    } else {
      processCart([...cartDisplay, { ...item, number: item.number + 1 }])
    }
    alert('Added to Cart')
    return
  }

  const increase = (id) => {
    const addition = cartDisplay.map((list) => {
      if (list.id === id) return { ...list, number: list.number + 1 }
      return list
    })
    setCartDisplay(addition)
  }

  const decrease = (id, number) => {
    if (number <= 1) return removeItem(id)
    const decrease = cartDisplay.map((list) => {
      if (list.id === id) {
        return { ...list, number: list.number - 1 }
      }
      return list
    })
    setCartDisplay(decrease)
  }

  const removeItem = (id) => {
    const list = cartDisplay.filter((item) => {
      return item.id !== id
    })
    setCartDisplay(list)
  }

  const getIncreaseCart = (id, toggle) => {
    const tempCart = cartDisplay.map((item) => {
      if (item.id === id) {
        if (toggle === 'inc') {
          return { ...item, number: item.number + 1 }
        } else {
          if (toggle === 'dec') {
            let newAmount = item.number - 1
            if (newAmount < 1) newAmount = 0
            return { ...item, number: newAmount }
          }
          return { ...item, number: 1 }
        }
      }
    })
    setCartDisplay(tempCart)
  }

  const processCart = (toProcessCart) => {
    const total = toProcessCart.reduce((a, item, index) => {
      if (!a[item.id]) {
        a[item.id] = { number: 1, ...item }
      } else a[item.id].number += 1
      return a
    }, {})
    let tempArr = []
    for (const item in total) {
      tempArr.push(total[item])
    }
    return setCartDisplay(tempArr)
  }

  const getCart = async () => {
    const data = await AsyncStorage.getItem('cart')
    const cartFromStorage = JSON.parse(data)
    setCartDisplay(cartFromStorage)
  }

  const getTotalPrice = () => {
    const totalPrice = cartDisplay?.reduce((total, item) => {
      total += item.number * item.price
      return total
    }, 0)
    return totalPrice
  }

  const storeCartToLocal = async () => {
    await AsyncStorage.setItem('cart', JSON.stringify(cartDisplay))
    return
  }

  const value = {
    getIncreaseCart,
    processCart,
    cartDisplay,
    setCartDisplay,
    handleAddtoCart,
    getCart,
    increase,
    decrease,
    removeItem,
    getTotalPrice,
    storeCartToLocal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  return useContext(CartContext)
}
