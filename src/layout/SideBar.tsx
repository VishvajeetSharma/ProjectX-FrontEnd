import { FiHome, FiUsers, FiMessageCircle, FiLogOut } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// ------------------------------------------------------------
// Sidebar Component
// ------------------------------------------------------------
interface SidebarProps {
  isOpen: boolean;
  onCloseMobile?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onCloseMobile }) => {
  const roleType = JSON.parse(localStorage.getItem('userType') as string);
  const menuItems =
    roleType === 'admin'
      ? [
          { label: 'Dashboard', icon: FiHome, path: '' },
          { label: 'Users', icon: FiUsers, path: 'admin-dashboard' },
          { label: 'Chat', icon: FiMessageCircle, path: 'admin-dashboard' },
          { label: 'Logout', icon: FiLogOut, path: '/' },
        ]
      : [
          { label: 'Dashboard', icon: FiHome, path: 'user-dashboard' },
          { label: 'Friends', icon: FaUserFriends, path: 'user-dashboard' },
          { label: 'Chat', icon: FiMessageCircle, path: 'user-dashboard' },
          { label: 'Logout', icon: FiLogOut, path: '/' },
        ];

  return (
    <div
      className={`bg-dark px-2 text-white h-100 d-flex flex-column transition-width ${
        isOpen ? 'sidebar-open' : 'sidebar-closed'
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
                `nav-link d-flex align-items-center gap-2 text-white ${
                  isActive ? 'active bg-primary rounded' : ''
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