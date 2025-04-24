function TeamMemberCard({ initials, name, role, description, color = "bg-blue-500" }) {
  return (
    <div className="bg-green-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div
        className={`${color} text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4`}
      >
        {initials}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{role}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default TeamMemberCard
