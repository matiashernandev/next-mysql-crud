import { pool } from "@/config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getProduct(req, res)

    case "DELETE":
      return deleteProduct(req, res)

    case "PUT":
      return updateProduct(req, res)

    default:
      return res.status(405).json({ message: "Method not allowed" })
  }
}

const getProduct = async (req, res) => {
  const { id } = req.query
  const [result] = await pool.query(`SELECT * FROM product WHERE id = ?`, [id])
  return res.status(200).json(result[0])
}

const deleteProduct = async (req, res) => {
  const { id } = req.query
  const [result] = await pool.query(`DELETE FROM product WHERE id = ?`, [id])
  return res.status(204).json()
}

const updateProduct = async (req, res) => {
  const { id } = req.query
  const [result] = await pool.query(`UPDATE product SET ? WHERE id = ?`, [
    req.body,
    id,
  ])
  return res.status(204).json()
}
