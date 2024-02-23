import { Navigate, useLocation } from "react-router-dom";
const isLogged = false;
const ProtectedView = ({ children }) => {
  const { pathname } = useLocation();
  console.log({ pathname });
  if (!isLogged && pathname !== "/logine") {
    return <Navigate to="/signin" replace={true} />;
  }
  return children;
};
export default ProtectedView;
