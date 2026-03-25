import { NavLink } from "react-router-dom";

const Navbar = () => {

  const landingMenuItems = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About Us" },
    { path: "/courses", text: "Courses" },
    { path: "/news-and-blogs", text: "News and Blogs" },
    { path: "/faq", text: "FAQ" },
    { path: "/contact", text: "Contact Us" },
    { path: "/registration", text: "Register" },
    { path: "/login", text: "Login" },
    { path: "/admin-login", text: "Admin Login" }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light my-second-bg-dark">
        <div className="container">
          <NavLink className="navbar-brand text-light fs-2 fw-bold" to="/">
            <img
              src="images/logo.png"
              alt="Logo"
              className="rounded-circle me-2"
              width="40"
              height="40"
            /> Eduport
          </NavLink>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ lineHeight: 1 }}>☰
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              {landingMenuItems.map((link, index) => (
                <li className="nav-item" key={index}>
                  <NavLink 
                    className={({ isActive }) => `nav-link text-light ${isActive ? "active" : ""}`} 
                    to={link.path}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;