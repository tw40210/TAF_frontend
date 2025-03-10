import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  console.log("user", currentUser)

  return currentUser ? children : <Navigate to="/header" replace />;
};

export default ProtectedRoute;
