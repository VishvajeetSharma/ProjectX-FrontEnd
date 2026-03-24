import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function UserAuthGuard({ children }: Props) {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  if (!token) return <Navigate to="/login" replace />;
  if (userType !== "user") return <Navigate to="/" replace />;

  return children;
}