import Layout from "@/components/Layout"
import axios from "axios"

export default function ProductView({ data }) {
  console.log(data[0])

  const product = data[0]
  return (
    <Layout>
      {product ? (
        <div className="container">
          <h1>{product.name}</h1>
          <p>{product.id}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  )

  console.log(data)

  return {
    props: {
      data,
    },
  }
}
