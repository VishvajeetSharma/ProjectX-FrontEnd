import React from 'react';
import { FiHome, FiUsers, FiMessageCircle, FiLogOut } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  role: 'user' | 'admin';
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, role }) => {
  // Define menu items based on role
  const menuItems =
    role === 'admin'
      ? [
          { label: 'Dashboard', icon: FiHome },
          { label: 'Users', icon: FiUsers },
          { label: 'Chat', icon: FiMessageCircle },
          { label: 'Logout', icon: FiLogOut },
        ]
      : [
          { label: 'Dashboard', icon: FiHome },
          { label: 'Friends', icon: FaUserFriends },
          { label: 'Chat', icon: FiMessageCircle },
          { label: 'Logout', icon: FiLogOut },
        ];

  return (
    <div
      className={`${
        isOpen ? 'col-sm-2' : 'col-sm-1'
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
            <a href="#" className="nav-link text-white d-flex align-items-center gap-2">
              <item.icon />
              {isOpen && <span>{item.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;