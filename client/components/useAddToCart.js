import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth'

const useAddToCart = () => {
  const { cartState, cart, setCart } = useContext(AuthContext)
  const [total, setTotal] = useState(null)

  useEffect(() => {
    if (cartState?.length > 0) {
      const totalPrice = cartState.reduce((sum, item) => {
        return (sum += +item.price)
      }, 0)

      const total = cartState.reduce((a, item, index) => {
        if (!a[item.title]) {
          a[item.title] = { number: 1, price: item.price }
        } else a[item.title].number += 1
        return a
      }, {})
      setTotal(totalPrice)
      const arr = Object.entries(total)
      setCart(arr)
    }
  }, [cartState])
  return { total, cart }
}

export default useAddToCart
