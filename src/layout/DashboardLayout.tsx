

import { useContext, useEffect, useState } from "react";
import "../styles/DashboardLayout.css"
import Sidebar from "./SideBar";
import { UserContext } from "../context/user/UserContext";


// ------------------------------------------------------------
// DashboardLayout Component
// ------------------------------------------------------------
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const {user}=useContext(UserContext)
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(true); // desktop: open by default
      else setSidebarOpen(false); // mobile: closed by default
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebarMobile = () => {
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <>

      {isMobile ? (
        // ------------------- Mobile View -------------------
        <>
          {/* Top Bar */}
          <div className="my-second-bg-dark text-white p-2 d-flex justify-content-between align-items-center">
            <button
              onClick={toggleSidebar}
              className="btn btn-outline-light border-0 fs-4"
              style={{ lineHeight: 1 }}
            >
              ☰
            </button>
            <img
              src=""
              alt="User"
              className="rounded-circle"
              width="40"
              height="40"
            />
          </div>

          {/* Sidebar Overlay */}
          {sidebarOpen && (
            <div
              className="mobile-sidebar-overlay"
              onClick={closeSidebarMobile}
            />
          )}
          <div className={`mobile-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
            <Sidebar isOpen={true} onCloseMobile={closeSidebarMobile} />
          </div>

          {/* Main Content */}
          <div className="p-3">{children}</div>
        </>
      ) : (
        // ------------------- Desktop View -------------------
        <div className="desktop-layout">
          <div className="desktop-sidebar">
            <Sidebar isOpen={sidebarOpen} />
          </div>
          <div className="desktop-content">
            {/* Top Bar */}
            <div className="my-second-bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center">
              <button
                onClick={toggleSidebar}
                className="btn btn-outline-light border-0 fs-4"
                style={{ lineHeight: 1 }}
              >
                ☰
              </button>
              <img
                src={`http://localhost:8000/file/${user?.profile}`}
                alt="User"
                className="rounded-circle"
                width="40"
                height="40"
              />
              {/* {user?.profile} */}
            </div>
            {/* Scrollable Content */}
            <div className="desktop-content-main">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;