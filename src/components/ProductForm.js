import axios from "axios"

export function ProductForm() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)

    const res = await axios.post("http://localhost:3000/api/products", {
      name: data.name,
      price: data.price,
      description: data.description,
    })

    //console.log(res)
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
