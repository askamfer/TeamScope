// import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" activeclassname="active">
          TeamScope
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Used <NavLink> instead of <Link> to take advantage of setting the active nav item with activeclassname */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/MLB" activeclassname="active">
                MLB Teams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/NFL" activeclassname="active">
                NFL Teams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/NBA" activeclassname="active">
                NBA Teams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/NHL" activeclassname="active">
                NHL Teams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeclassname="active"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
