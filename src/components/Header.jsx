import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className=" hidden md:block text-center text-xl font-medium">
          Smart Cloud-Based Soil Advisor
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="hover:text-green-600 transition-colors"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-green-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/artifacts"
                className="hover:text-green-600 transition-colors"
              >
                Artifacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
