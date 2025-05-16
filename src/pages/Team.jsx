import Header from "../components/Header";

const Team = () => {
  const teamMembers = [
    {
      initials: "SK",
      name: "Dr. Swaib Kyanda Kaawaase",
      role: "Head of Department – Networks",
      description:
        "Project supervisor with deep expertise in computer networks, academic mentorship, and research in emerging technologies.",
      image: "/drswaib.jpeg",
    },
    {
      initials: "HP",
      name: "Heli Prajapati",
      role: "AI and machine learning",
      description:
        "Proficiency in AI, machine learning and full-stack web development. Her expertise encompasses both frontend and backend technologies.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Heli.jpg-QeQolaefPgSz1L0aJYs5GZyv0Tcp1e.jpeg",
    },
    {
      initials: "MM",
      name: "Mugoya Moses",
      role: "Full Stack Developer",
      description:
        "Specializes in full-stack development with extensive experience in creating responsive web applications.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moses-r6uTS0aLVHRYTkt9LgFkwzIl7ddV4Z.jpeg",
    },
    {
      initials: "ME",
      name: "Muhangi Elioda",
      role: "Backend Developer",
      description:
        "Proficient in embedded systems, back-end technologies and ensuring robust server-side logic.",
      image: "/elioda.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-lg text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                      {member.initials}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
