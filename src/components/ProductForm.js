import axios from "axios"

export function ProductForm() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)

    /*  const data = Object.fromEntries(formData)
    console.log(data.name) */

    //console.log(formData)

    // validation formData is  map
    //  console.log(typeof formData)

    /*  const mapa = new Map([["nombre", "hernán"]])
    console.log(mapa) */

    /*
    const data2 = Object.keys(data)
    console.log("keys ", data2) */

    const res = await axios.post("http://localhost:3000/api/products", {
      name: data.name,
      price: data.price,
      description: data.description,
    })

    console.log(res)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label>
          Price
          <input type="text" name="price" />
        </label>

        <label htmlFor="description">Description</label>
        <input type="text" name="description" />

        <button>Save Product</button>
      </form>
    </div>
  )
}
