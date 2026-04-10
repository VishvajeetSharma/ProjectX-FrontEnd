import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { clearAuth } from "../../redux/slices/authSlice";

const Navbar = () => {
  const { isAuthenticated, userType } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearAuth());
    navigate("/login");
  };

  const landingMenuItems = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About Us" },
    { path: "/pricing", text: "Our Plans" },
    { path: "/news-and-blogs", text: "News and Blogs" },
    { path: "/faq", text: "FAQ" },
    { path: "/contact", text: "Contact Us" },
  ];

  const authMenuItems = isAuthenticated 
    ? [
        { path: userType === 'admin' ? "/admin-dashboard" : "/user-dashboard", text: "Dashboard" }
      ]
    : [
        { path: "/registration", text: "Register" },
        { path: "/login", text: "Login" },
        { path: "/admin-login", text: "Admin" }
      ];

  return (
    <>
      <nav className="navbar navbar-expand-lg my-second-bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="images/logo.png"
              alt="Logo"
              className="rounded-circle me-2"
              width="40"
              height="40"
            /> CourseCraft
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
            <span className="navbar-toggler-icon" style={{ lineHeight: 1 }}>☰
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              {landingMenuItems.map((link, index) => (
                <li className="nav-item" key={index}>
                  <NavLink 
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} 
                    to={link.path}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
              {authMenuItems.map((link, index) => (
                <li className="nav-item" key={`auth-${index}`}>
                  <NavLink 
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} 
                    to={link.path}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
              {isAuthenticated && (
                <li className="nav-item">
                  <button 
                    className="nav-link btn btn-link" 
                    onClick={handleLogout}
                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
