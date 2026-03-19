import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <NavLink className="navbar-brand text-light fs-2 fw-bold" to="/">
            Eduport
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/registration">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;