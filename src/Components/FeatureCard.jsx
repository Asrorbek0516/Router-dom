function FeatureCard({ icon, title, description }) {
  return (
    <div className="border border-gray-100 rounded-xl p-5 hover:shadow-lg transition">

      <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-xl">
        {icon}
      </div>

      <h3 className="font-bold mt-4">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2 leading-6">
        {description}
      </p>

    </div>
  )
}

export default FeatureCard