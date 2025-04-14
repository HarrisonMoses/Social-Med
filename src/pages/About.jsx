import Header from "../components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Project Background</h2>
          <p className="mb-6 text-gray-700">
            Smallholder farmers in Uganda face significant challenges in
            optimizing crop yields due to limited access to real-time soil data.
            Without precise information on soil nutrient levels, moisture, and
            temperature, they often rely on guesswork for fertilizer
            application, irrigation, and crop selection. This leads to
            inefficient use of resources, poor agricultural productivity, and
            soil degradation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Limited Data Access</h3>
              <p className="text-sm text-gray-600">
                Lack of access to real-time soil data affects decision-making
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Resource Inefficiency</h3>
              <p className="text-sm text-gray-600">
                Suboptimal use of fertilizers and irrigation resources
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Poor Productivity</h3>
              <p className="text-sm text-gray-600">
                Reduced agricultural output due to inadequate soil management
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Soil Degradation</h3>
              <p className="text-sm text-gray-600">
                Progressive deterioration of soil quality and fertility
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Main Objectives</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Monitor Soil Conditions</h3>
              <p className="text-sm text-gray-600">
                Collect real-time data on moisture, temperature, and nutrient
                levels (NPK) using sensor.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Cloud Based Analysis</h3>
              <p className="text-sm text-gray-600">
                Send captured data to the cloud for processing and storage.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-medium mb-1">
                Provide Insights and Recommendations
              </h3>
              <p className="text-sm text-gray-600">
                Analyze soil data to suggest suitable crops and farming
                practices based on conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Core Purpose</h2>

          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Helping Farmers optimise crop growth.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Assist farmers in maintaining healthy soil.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="h-5 w-5 text-green-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Environment monitoring for research purposes.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
