import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/style.css';
import Home from './pages/landing/Home'
import Registration from './pages/landing/Registration';
import Login from './pages/landing/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/landing/AdminLogin';
import AboutUs from './pages/landing/AboutUs';
import NewsBlogs from './pages/landing/NewsBlogs';
import Faq from './pages/landing/Faq';
import ContactUs from './pages/landing/ContactUs';
import CreateMasterCourse from './pages/admin/CreateMasterCourse';
import MasterCourse from './pages/admin/MasterCourseList';
import MasterPlan from './pages/admin/MasterPlanList';
import AuthGuard from './hoc/AuthGuard';
import PurchaseCredit from './pages/user/PurchasePlan';
import UserPlans from './pages/user/UserPlans';
import PurchaseCourse from './pages/user/PurchaseCourse';
import Pricing from './pages/landing/Princing';
import UsersPage from './pages/admin/UsersPage';
import CourseList from './pages/admin/MasterCourseList';
import CreateMasterPlan from './pages/admin/CreateMasterPlan';
import AdminUpdatePassword from './pages/admin/AdminUpdatePassword';
import AdminResetPassword from './pages/landing/AdminResetPassword';
import UserUpdatePassword from './pages/user/UserUpdatePassword';
import ForgetPassword from './pages/landing/ForgetPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProfile from './pages/user/UpdateProfile';
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
          <Route path="/news-and-blogs" element={<NewsBlogs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/admin-reset-password" element={<AdminResetPassword />} />



          {/* user Routes */}
          <Route path="/user-dashboard" element={<AuthGuard allowedRoles={['user']}><UserDashboard /></AuthGuard>} />
          <Route path="/user-purchase-credit" element={<AuthGuard allowedRoles={['user']}><PurchaseCredit /></AuthGuard>} />
          <Route path="/user-plans" element={<AuthGuard allowedRoles={['user']}><UserPlans /></AuthGuard>} />
          <Route path="/user-purchase-course" element={<AuthGuard allowedRoles={['user']}><PurchaseCourse /></AuthGuard>} />
          <Route path='/user/update-password' element={<AuthGuard allowedRoles={['user']}><UserUpdatePassword /></AuthGuard>} />
          <Route path='/user/update-profile' element={<AuthGuard allowedRoles={['user']}><UpdateProfile /></AuthGuard>} />


          {/* Admin Routes */ }
          <Route path="/admin-dashboard" element={<AuthGuard allowedRoles={['admin']}><AdminDashboard /></AuthGuard>} />
          <Route path="/admin/users" element={<AuthGuard allowedRoles={['admin']}><UsersPage /></AuthGuard>} />
          <Route path='/admin/create-master-plan' element={<AuthGuard allowedRoles={['admin']}><CreateMasterPlan /></AuthGuard>} />
          <Route path='/admin/master-plan' element={<AuthGuard allowedRoles={['admin']}><MasterPlan /></AuthGuard>} />
          <Route path='/admin/create-master-course' element={<AuthGuard allowedRoles={['admin']}><CreateMasterCourse /></AuthGuard>} />
          <Route path='/admin/master-course' element={<AuthGuard allowedRoles={['admin']}><MasterCourse /></AuthGuard>} />
          <Route path='/admin/update-password' element={<AuthGuard allowedRoles={['admin']}><AdminUpdatePassword /></AuthGuard>} />




          <Route path='/test' element={<UsersPage />} />
          <Route path='/testt' element={<CourseList />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App


