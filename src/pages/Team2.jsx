"use client"

import { useState } from "react"
import Header from "../components/Header"
import team from "../Data/TeamsData"

function Team2() {
  const [member, setMember] = useState(team[0])

  const handleMemberChange = (name) => {
    const selectedMember = team.find((m) => m.name === name)
    if (selectedMember) {
      setMember(selectedMember)
    }
  }

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center gradient_bg mx-auto w-max mb-8">Our Team</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {team.map((member, index) => (
            <button
              key={index}
              onClick={() => handleMemberChange(member.name)}
              className="bg-slate-500 text-white p-2 rounded-xl hover:bg-green-400 transition-colors duration-300 cursor-pointer text-sm md:text-base"
            >
              {member.name.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="md:flex items-start gap-8 mb-8">
          <div className="mb-6 md:mb-0">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
              <img
                className="w-full h-full object-cover"
                src={member.image || "/placeholder.svg"}
                alt={`${member.name} profile`}
              />
            </div>
          </div>

          <div className="md:flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-gray-600 font-mono mb-2">{member.Reg}</p>
            <p className="text-gray-700">{member.description}</p>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Current Tasks & Responsibilities</h4>

              {member.tasks && member.tasks.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {member.tasks.map((task, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h5 className="font-semibold text-green-600 mb-2">{task.title}</h5>
                      <p className="text-sm text-gray-600">{task.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No current tasks assigned.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team2
