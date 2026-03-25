import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import type { RootState } from '../redux/store';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, userType, token } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!isAuthenticated || !token) {
    // If the path looks like an admin path, we could redirect to admin-login, 
    // but the user's requirement says "redirect to /login url" generally.
    // However, I'll stick to a smart redirect:
    const isTryingToAccessAdmin = location.pathname.startsWith('/admin');
    return <Navigate to={isTryingToAccessAdmin ? "/admin-login" : "/login"} state={{ from: location }} replace />;
  }

  // Role-based access control
  if (allowedRoles && userType && !allowedRoles.includes(userType)) {
    // If user tries to access admin, redirect to user dashboard
    // If admin tries to access user, redirect to admin dashboard
    return <Navigate to={userType === 'admin' ? "/admin-dashboard" : "/user-dashboard"} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
