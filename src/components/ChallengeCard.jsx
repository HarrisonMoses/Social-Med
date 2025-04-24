function ChallengeCard({ icon, title, description }) {
  return (
    <div className="bg-green-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default ChallengeCard
