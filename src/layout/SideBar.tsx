import React from 'react';
import { FiHome, FiUsers, FiMessageCircle, FiLogOut } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  // Define menu items based on role
  const roleType = JSON.parse(localStorage.getItem("userType") as string);
  const menuItems =
    roleType === 'admin'
      ? [
        { label: 'Dashboard', icon: FiHome, path: "admin-dashboard" },
        { label: 'Users', icon: FiUsers, path: "admin-dashboard" },
        { label: 'Chat', icon: FiMessageCircle, path: "admin-dashboard" },
        { label: 'Logout', icon: FiLogOut, path: "admin-dashboard" },
      ]
      : [
        { label: 'Dashboard', icon: FiHome, path: "user-dashboard" },
        { label: 'Friends', icon: FaUserFriends, path: "user-dashboard" },
        { label: 'Chat', icon: FiMessageCircle, path: "user-dashboard" },
        { label: 'Logout', icon: FiLogOut, path: "user-dashboard" },
      ];

  return (
    <div
      className={`${isOpen ? 'col-sm-2' : 'col-sm-1'
        } bg-dark text-white min-vh-100 transition-width`}
    >
      {/* Logo / Brand */}
      <div className="p-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="rounded-circle me-2"
          width="30"
          height="30"
        />
        {isOpen && <span className="fw-bold">Dashboard</span>}
      </div>

      {/* Navigation Menu */}
      <ul className="nav flex-column mt-3">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 text-white ${isActive ? "active bg-primary rounded" : ""
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

export default Sidebar;