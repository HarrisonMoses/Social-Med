import Header from "../components/Header";
import ProjectReport from "../artifacts/PROJECT REPORT.pdf";
import SSRS from "../artifacts/SSRS.pdf";

const Artifacts = () => {
  const documents = [
    {
      title: "Software Requirements Specification (SRS)",
      url: SSRS,
    },
    {
      title: "Final Project Report",
      url: ProjectReport,
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Project Documents</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-gray-50"
              >
                <div className="p-4">
                  <h3 className="font-medium mb-4">{doc.title}</h3>

                  <div
                    className="border rounded overflow-hidden mb-4"
                    style={{ height: "320px" }}
                  >
                    <iframe
                      src={doc.url}
                      title={doc.title}
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  </div>

                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    Open Full PDF
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
