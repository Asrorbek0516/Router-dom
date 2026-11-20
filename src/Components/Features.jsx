import FeatureCard from './FeatureCard'

function Features() {
  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Fast',
      description: 'Lightning-fast performance with modern web technologies for the best reading experience.'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Secure',
      description: 'Your data is protected with industry-standard security practices and encryption.'
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Easy to Manage',
      description: 'Intuitive design makes content management effortless and enjoyable.'
    }
  ]

  return (
    <section className="py-16 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Why Choose Blogify?
          </h2>

          <p className="text-gray-500 mt-3 text-sm">
            Built with modern technologies and best practices to provide the best blogging experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              {...feature}
            />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Features