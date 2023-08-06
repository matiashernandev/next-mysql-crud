import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-between items-center mx-10 py-3">
        <h1>Navbar</h1>
        <div className="flex gap-5">
          <Link href="/new">Nueva tarea</Link>
          <Link href="/">Lista de tareas</Link>
        </div>
      </div>

      <div className="bg-deep-purple-500 h-screen p-10">
        <div className="container mx-auto h-full"> {children}</div>
      </div>
    </>
  )
}
