function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-sm">

          <a href="/" className="text-xl font-bold text-indigo-600">
            ✎ Blogify
          </a>

          <a href="/" className="block text-sm text-gray-500 mt-10">
            ← Back to Home
          </a>

          <h1 className="text-3xl font-bold mt-3">
            Welcome Back
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Enter your credentials to access your account.
          </p>

          <form className="mt-7">

            <label className="text-sm font-medium block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
            />

            <label className="text-sm font-medium block mt-5 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-6 hover:bg-indigo-700 transition"
            >
              Login
            </button>

          </form>

          <p className="text-sm text-gray-500 text-center mt-5">
            Don't have an account?
            <a href="#" className="text-indigo-600 ml-1">
              Sign up
            </a>
          </p>

        </div>

      </div>

      <div className="hidden md:flex w-full md:w-1/2 bg-linear-to-br from-indigo-100 to-purple-100 items-center justify-center p-10">

        <div className="text-center">

          <div className="w-80 h-80 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 shadow-xl flex items-center justify-center">
            <span className="text-8xl">🔐</span>
          </div>

          <h2 className="text-2xl font-bold mt-7">
            Start Your Journey
          </h2>

          <p className="text-gray-500 mt-3">
            Join thousands of creators sharing their stories on Blogify.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login