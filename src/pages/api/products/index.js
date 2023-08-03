import { pool } from "@/config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json("Getting products")
    case "POST":
      const { name, price, description } = req.body

      const [result] = await pool.query("INSERT INTO product SET ?", {
        name,
        price,
        description,
      })

      res.status(200).json({ name, price, description, id: result.insertId })
  }
}
