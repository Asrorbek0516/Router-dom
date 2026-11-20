function Hero() {
  return (
    <section className="bg-linear-to-r from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="w-full md:w-1/2">

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Create, Read,
            <span className="block text-indigo-600">
              Inspire.
            </span>
          </h1>

          <p className="text-gray-500 mt-5 leading-6 max-w-md">
            Discover stories written by amazing people.
            Share your knowledge and inspire others with
            your unique perspective.
          </p>

          <div className="flex gap-4 mt-7">
            <a
              href="#posts"
              className="bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm"
            >
              Explore Posts →
            </a>

            <a
              href="/login"
              className="bg-white border border-gray-200 px-5 py-3 rounded-lg text-sm"
            >
              Get Started
            </a>
          </div>

        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-white p-5 rounded-xl shadow-xl">
            <div className="h-64 rounded-lg bg-linear-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center">

              <span className="text-7xl">📚</span>

              <h2 className="text-2xl font-bold text-indigo-700 mt-4">
                Learn & Create
              </h2>

              <p className="text-sm text-gray-600 mt-2">
                Share your knowledge with the world
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero