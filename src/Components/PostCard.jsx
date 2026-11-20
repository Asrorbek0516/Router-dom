function PostCard({ post }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition">

      <div className={`${post.color} h-44 flex items-center justify-center`}>
        <span className="text-6xl">{post.icon}</span>
      </div>

      <div className="p-5">

        <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
          {post.category}
        </span>

        <p className="text-xs text-gray-400 mt-4">
          {post.date}
        </p>

        <h3 className="font-bold text-gray-900 mt-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-500 mt-3 leading-6">
          {post.description}
        </p>

        <a href="/login" className="text-indigo-600 text-sm font-semibold inline-block mt-4 hover:underline">
          Read more →
        </a>

      </div>

    </div>
  )
}

export default PostCard