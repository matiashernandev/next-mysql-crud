import { pool } from "@/config/db"

export default async function handler(req, res) {
  const { id } = req.query

  const [result] = await pool.query(`SELECT * FROM product WHERE id = ${id}`)

  console.log(result)

  return res.status(200).json(result)
}
