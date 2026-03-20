import { useState, type ReactNode } from "react";
import Sidebar from "./SideBar";

interface DashboardLayoutProps {
  children: ReactNode;   // Proper typing for children
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Main content area */}
        <div className={`${sidebarOpen ? "col-sm-10" : "col-sm-11"}`}>
          {/* Top bar with toggle button and user image */}
          <div className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center">
            {/* Left: toggle button */}
            <button
              onClick={toggleSidebar}
              className="btn btn-outline-light border-0 fs-4"
              style={{ lineHeight: 1 }}
            >
              ☰
            </button>

            {/* Right: user image */}
            <img
              src=""
              alt="User"
              className="rounded-circle"
              width="40"
              height="40"
            />
          </div>

          {/* Page content */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;