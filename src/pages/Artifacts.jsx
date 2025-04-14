import Header from "../components/Header";

const Artifacts = () => {
  const documents = [
    {
      title: "Software Requirements Specification (SRS)",
      url: "#",
    },
    {
      title: "Software Design Document (SDD)",
      url: "#",
    },
    {
      title: "Data Collection Tool",
      url: "#",
    },
    {
      title: "Final Implementation Report",
      url: "#",
    },
    {
      title: "User Manual",
      url: "#",
    },
    {
      title: "Final Report",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Project Documents</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="p-4">
                  <h3 className="font-medium mb-4">{doc.title}</h3>

                  <div className="bg-gray-100 rounded p-3 mb-3">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        C
                      </div>
                      <span className="ml-2 text-sm">Dashboard</span>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Drafts
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        Shared
                      </div>
                    </div>

                    <div className="flex items-center text-xs text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Last opened
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded p-3 mb-4">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      <span className="text-sm">Community</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500">
                      High quality assets
                    </span>
                  </div>

                  <a
                    href={doc.url}
                    className="inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifacts;
