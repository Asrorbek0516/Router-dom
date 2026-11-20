import PostCard from './PostCard'

function LatestPosts() {
  const posts = [
    {
      id: 1,
      category: 'Technology',
      date: 'Nov 20, 2026',
      title: 'The Future of Web Development',
      description: 'Exploring the latest trends and technologies shaping the future of web development.',
      icon: '💻',
      color: 'bg-indigo-100'
    },
    {
      id: 2,
      category: 'Productivity',
      date: 'Nov 18, 2026',
      title: 'Mastering Productivity',
      description: 'Practical strategies and tools to boost your productivity and achieve your goals faster.',
      icon: '🚀',
      color: 'bg-orange-100'
    },
    {
      id: 3,
      category: 'Design',
      date: 'Nov 15, 2026',
      title: 'Design Principles That Matter',
      description: 'Discover design principles every creator should know to build amazing user experiences.',
      icon: '🎨',
      color: 'bg-purple-100'
    }
  ]

  return (
    <section id="posts" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Posts
            </h2>

            <p className="text-gray-500 mt-2">
              Check out our most recent articles.
            </p>
          </div>

          <a href="/login" className="border border-gray-200 bg-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-50">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default LatestPosts