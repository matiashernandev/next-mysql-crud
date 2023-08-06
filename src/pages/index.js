import { CardWithLink } from "@/components/CardWithLink"
import Layout from "@/components/Layout"
import axios from "axios"

function HomePage({ products }) {
  return (
    <Layout>
      <div className="flex gap-5 flex-wrap justify-center">
        {products.map((product) => (
          <CardWithLink key={product.id} product={product} />
        ))}
      </div>
    </Layout>
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
