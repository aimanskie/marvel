import { useState, useEffect, createContext } from 'react'

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({ product: [], review: [] })

  const createProduct = () => {
    let productTemp = { product: [], review: [] }
    for (let i = 1; i < 30; i++) {
      productTemp.product.push({
        id: i,
        title: `Product name dolor sit amet consectetur${i}`,
        description: `Product descriptiona${i}`,
        price: 50,
        discountedPrice: 31,
      })
    }
    for (let j = 0; j < 30; j++) {
      productTemp.review.push({
        id: j,
        title: `Username123412323${j}`,
        date: new Date().toLocaleDateString(),
        content: `Lorem ipsum dolor sit amet consectetur adipascing elit. Ut mattias pharetapretium volupat ornare faucibus etiam sed id${j}`,
      })
    }
    return productTemp
  }

  useEffect(() => {
    setProducts(createProduct)
  }, [])

  const value = {
    products,
    setProducts,
  }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export { ProductContext, ProductProvider }
