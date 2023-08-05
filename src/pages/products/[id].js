import Layout from "@/components/Layout"
import { Button } from "@material-tailwind/react"
import axios from "axios"
import { useRouter } from "next/router"

export default function ProductView({ product }) {
  const { push } = useRouter()

  const handleDelete = async () => {
    await axios.delete("/api/products/" + product.id)
    push("/")
  }

  return (
    <Layout>
      {product ? (
        <div className="container">
          <h1>{product.name}</h1>
          <p>{product.id}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>

          <Button onClick={handleDelete} color="red">
            gfdgd
          </Button>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  )

  return {
    props: {
      product,
    },
  }
}
