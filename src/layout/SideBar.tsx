import { FiHome, FiUsers, FiMessageCircle, FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { FaBook, FaLayerGroup } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  onCloseMobile?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onCloseMobile }) => {
  const roleType = JSON.parse(localStorage.getItem('userType') as string);
  const menuItems =
    roleType === 'user'
      ? [
        { label: 'Dashboard', icon: FiHome, path: '/user-dashboard' },
      ]
      : [
        { label: "Dashboard", icon: MdDashboard, path: "/admin-dashboard" },
        { label: 'Manage Users', icon: FiUsers, path: '/admin/users' },
        { label: "Create Master Plan", icon: FaLayerGroup, path: "/admin/create-master-plan" },
        { label: "Master Plan", icon: FaLayerGroup, path: "/admin/master-plan" },
        { label: "Create Master Course", icon: FaBook, path: "/admin/create-master-course" },
        { label: "Master Course", icon: FaBook, path: "/admin/master-course" },
        { label: 'Logout', icon: FiLogOut, path: '/' },
      ];

  return (
    <div
      className={`my-second-bg-dark px-2 text-white h-100 d-flex flex-column transition-width ${isOpen ? 'sidebar-open' : 'sidebar-closed'
        }`}
      style={{ overflowY: 'auto', overflowX: 'hidden' }}
    >
      {/* Logo / Brand */}
      <div className="p-3 d-flex align-items-center">
        <img
          src="images/logo.png"
          alt="Logo"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
        {isOpen && <span className="fw-bold">Dashboard</span>}
      </div>

      {/* Navigation Menu */}
      <ul className="nav flex-column mt-3">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.label}>
            <NavLink
              to={item.path}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 text-white ${isActive ? 'active rounded' : ''
                }`
              }
            >
              <item.icon />
              {isOpen && <span>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar