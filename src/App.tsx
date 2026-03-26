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
import AuthGuard from './hoc/AuthGuard';
import UpdatePasswordForm from './components/UpdatePassword';
import ResetPasswordForm from './components/ResetPassword';
import PurchaseCredit from './pages/user/PurchaseCredit';
import UserPlans from './pages/user/UserPlans';
import PurchaseCourse from './pages/user/PurchaseCourse';
import UserCourse from './pages/user/UserCourse';
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
          <Route path="/user-dashboard" element={<AuthGuard allowedRoles={['user']}><UserDashboard /></AuthGuard>} />
          <Route path="/user-purchase-credit" element={<AuthGuard allowedRoles={['user']}><PurchaseCredit /></AuthGuard>} />
          <Route path="/user-plans" element={<AuthGuard allowedRoles={['user']}><UserPlans /></AuthGuard>} />
          <Route path="/user-purchase-course" element={<AuthGuard allowedRoles={['user']}><PurchaseCourse /></AuthGuard>} />
          <Route path="/user-course" element={<AuthGuard allowedRoles={['user']}><UserCourse /></AuthGuard>} />


          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AuthGuard allowedRoles={['admin']}><AdminDashboard /></AuthGuard>} />
          <Route path="/admin/users" element={<AuthGuard allowedRoles={['admin']}><Users /></AuthGuard>} />
          <Route path='/admin/create-master-plan' element={<AuthGuard allowedRoles={['admin']}><CreateMasterPlan /></AuthGuard>} />
          <Route path='/admin/master-plan' element={<AuthGuard allowedRoles={['admin']}><MasterPlan /></AuthGuard>} />
          <Route path='/admin/create-master-course' element={<AuthGuard allowedRoles={['admin']}><CreateMasterCourse /></AuthGuard>} />
          <Route path='/admin/master-course' element={<AuthGuard allowedRoles={['admin']}><MasterCourse /></AuthGuard>} />


          <Route path='/update-password' element={<UpdatePasswordForm />} />
          <Route path='/reset-password' element={<ResetPasswordForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


