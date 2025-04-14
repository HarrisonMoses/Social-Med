import Header from "../components/Header";

const Blog = () => {
  const teamContributions = [
    {
      name: "Heli Prajapati",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Heli.jpg-QeQolaefPgSz1L0aJYs5GZyv0Tcp1e.jpeg",
      contributions: [
        {
          category: "Documentation",
          items: [
            "Blog Designing: Contributed to designing and regularly updating the project blog for easy tracking of project progress.",
            "Data Collection: Participated in designing the data collection tool, including the creation of a Google Form questionnaire.",
            "SRS Documentation: Contributed to identifying and documenting the system's specifications and requirements in the Software Requirements Specification (SRS).",
            "Report Writing: Collaborated with the team to compile and write various sections of the final project report.",
            "SDD Documentation: Helped formulate the Software Design Document (SDD) to assist future developers and users in understanding the system's implementation.",
            "Final Report Documentation: Actively participated in documenting the final report, including system implementation, user manual, performance evaluation, and test results.",
          ],
        },
        {
          category: "System Development",
          items: [
            "Designed and implemented the front-end of the application.",
            "Assisted in backend API creation.",
            "Trained the machine learning model for high accuracy.",
            "Implemented the notification system.",
            "Contributed to the integration and successful connection of IoT sensors.",
            "Helped in implementing the AI chatbot using OpenAI.",
          ],
        },
      ],
    },
    {
      name: "Mugoya Moses",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moses-r6uTS0aLVHRYTkt9LgFkwzIl7ddV4Z.jpeg",
      contributions: [
        {
          category: "Documentation",
          items: [
            "Project Proposal: Assisted in drafting the project proposal presented at NARO.",
            "Blog Designing: Helped in the design and regular updates of the project blog.",
            "Questionnaire Designing: Created the set of questions used in the data collection tools.",
            "Data Analysis: Analyzed data collected via the designed tools.",
            "SRS Documentation: Contributed to developing the Software Requirements Specification (SRS) document.",
            "Report Writing: Participated in compiling and writing the final project report.",
            "SDD Documentation: Took part in designing the Software Design Document (SDD).",
          ],
        },
        {
          category: "System Development",
          items: [
            "Assisted in UI design.",
            "Contributed to backend development and API integration.",
            "Participated in IoT sensor integration and API data reading.",
            "Implemented user registration and verification.",
            "Developed the notification module to send alert messages to users.",
            "Developed the AI chat bot using OpenAI and recommedations feature",
          ],
        },
      ],
    },
    {
      name: "Muhangi Elioda",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=200&width=200",
      contributions: [
        {
          category: "Documentation",
          items: [
            "Project Conceptualization: Originated the project idea and convinced the team to take it up by designing the initial concept paper.",
            "SDD Documentation: Contributed to the development of the Software Design Document (SDD).",
            "Final Report Documentation: Participated in compiling the final implementation report, including system performance, user manual, and testing outcomes.",
          ],
        },
        {
          category: "System Development",
          items: [
            "Debugged the NPK sensor for accurate readings.",
            "Integrated temperature and soil moisture sensors with the ESP32 microcontroller.",
            "Managed sensor data updates and preprocessing.",
            "Heavily involved in backend system development.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Project Contributions
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            This page documents the individual contributions of team members
            towards the Smart Cloud-Based Soil Advisor project.
          </p>
        </div>

        {teamContributions.map((member, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-center md:text-left">
                  {member.name}
                </h3>
                <h4 className="text-lg font-medium mb-4 text-center md:text-left">
                  Contribution Towards the Project
                </h4>
              </div>
            </div>

            {member.contributions.map((contribution, cIndex) => (
              <div key={cIndex} className="mb-6">
                <h5 className="text-md font-medium text-green-700 mb-2">
                  {contribution.category}
                </h5>
                <ul className="list-none pl-6 space-y-2">
                  {contribution.items.map((item, iIndex) => (
                    <li key={iIndex} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
