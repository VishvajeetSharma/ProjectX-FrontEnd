import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/style.css';
import Home from './pages/landing/Home'
import Registration from './pages/landing/Registration';
import Login from './pages/landing/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/landing/AdminLogin';
import AboutUs from './pages/landing/AboutUs';
import Courses from './pages/landing/Courses';
import NewsBlogs from './pages/landing/NewsBlogs';
import Faq from './pages/landing/Faq';
import ContactUs from './pages/landing/ContactUs';
import CreateMasterCourse from './pages/admin/CreateMasterCourse';
import MasterCourse from './pages/admin/MasterCourse';
import CreateMasterPlan from './pages/admin/CreateMasterPlan';
import MasterPlan from './pages/admin/MasterPlan';
import Users from './pages/admin/Users';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/news-and-blogs" element={<NewsBlogs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* user Routes */}
          <Route path="/user-dashboard" element={<UserDashboard />} />


          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path='/admin/create-master-plan' element={<CreateMasterPlan />} />
          <Route path='/admin/master-plan' element={<MasterPlan />} />
          <Route path='/admin/create-master-course' element={<CreateMasterCourse />} />
          <Route path='/admin/master-course' element={<MasterCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


