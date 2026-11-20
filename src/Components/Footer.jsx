function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div className="max-w-xs">
            <h2 className="text-xl font-bold text-indigo-600">
              ✎ Blogify
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-6">
              Create, read, and inspire. Discover amazing stories
              written by talented creators from around the world.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="/">Home</a>
              <a href="#posts">Posts</a>
              <a href="/login">Login</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Connect
            </h3>

            <div className="flex gap-4 text-gray-500">
              <a href="https://github.com">GitHub</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Blogify. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer