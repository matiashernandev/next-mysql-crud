import axios from "axios"
import { useEffect, useState } from "react"

const Product = () => {
  const [products, setProducts] = useState(null)

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/api/products")
    setProducts(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      {products
        ? products.map((product) => (
            <div key={product.id}>
              <div className=""> {product.name}</div>
              <div className=""> {product.description}</div>
              <div className=""> {product.price}</div>
            </div>
          ))
        : null}
    </div>
  )
}
export default Product
