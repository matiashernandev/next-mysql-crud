import { ProductForm } from "@/components/ProductForm"
import Product from "./products/product"
import axios from "axios"

function HomePage({ products }) {
  return (
    <div>
      <ProductForm />

      <pre>{JSON.stringify(products, null, 2)}</pre>

      {/*   <Product /> */}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  )

  return {
    props: {
      products,
    },
  }
}

export default HomePage
