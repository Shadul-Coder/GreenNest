import { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;