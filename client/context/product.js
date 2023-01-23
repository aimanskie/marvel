import { useState, useEffect, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({ product: [], review: [] })

  useEffect(() => {
    for (let i = 0; i < 30; i++) {
      products.product.push({
        title: 'Product name dolor sit amet consectetur',
        description: 'Product description',
        price: 50,
        discountedPrice: 31,
      })
    }
    for (let i = 0; i < 30; i++) {
      products.review.push({
        title: 'Username123412323',
        date: new Date().toLocaleDateString(),
        content:
          'Lorem ipsum dolor sit amet consectetur adipascing elit. Ut mattias pharetapretium volupat ornare faucibus etiam sed id',
      })
    }
  }, [])

  const value = {
    products,
    setProducts,
  }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export { ProductContext, ProductProvider }
