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
import Navbar from './pages/landing/Navbar';
import Footer from './pages/landing/Footer';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
          <Route path="/users" element={<Users />} />
          <Route path='/create-master-plan' element={<CreateMasterPlan />} />
          <Route path='/master-plan' element={<MasterPlan />} />
          <Route path='/create-master-course' element={<CreateMasterCourse />} />
          <Route path='/master-course' element={<MasterCourse />} />
        </Routes>
        <Footer />
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