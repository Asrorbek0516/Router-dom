import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="text-xl font-bold text-indigo-600">
          ✎ Blogify
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-sm text-gray-700 hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="bg-indigo-600 text-white text-sm px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  )
}

export default Navbar