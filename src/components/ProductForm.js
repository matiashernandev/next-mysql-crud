import axios from "axios"
import { Button } from "@material-tailwind/react"
import { Input } from "@material-tailwind/react"
import { useRouter } from "next/router"

export function ProductForm() {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)
    console.log(data)

    const res = await axios.post("/api/products", {
      name: data.name,
      price: data.price,
      description: data.description,
    })

    console.log(res)

    router.push("/")
  }

  return (
    <div className="container flex flex-col justify-center items-center p-10">
      <h1 className="text-2xl">Product Form </h1>
      <form
        className="flex w-72 flex-col gap-5 m-10 text-white"
        onSubmit={handleSubmit}
      >
        <Input name="name" className="text-white" color="blue" label="Name" />
        <Input
          name="price"
          className=" text-white"
          type="number"
          color="blue"
          label="Price"
        />
        <Input
          name="description"
          className="text-white"
          color="blue"
          label="Description"
        />

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}
