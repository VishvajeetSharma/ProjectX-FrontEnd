import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/style.css';
import Home from './pages/landing/Home'
import Registration from './pages/landing/Registration';
import Login from './pages/landing/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/landing/AdminLogin';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />


          {/* user Routes */}
          <Route path="/user-dashboard" element={<UserDashboard />} />


          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



// 1. Redux
// 2. Public Protected Routes
// 3. Master & Plan
// 4. Master Plan Create Form
// 5. Master Course UI
// 6. 