import React, { useContext } from "react";
import { authContextAPI } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(authContextAPI);
  if (loader) {
    return (
      <div
        className="radial-progress bg-primary text-primary-content border-4 border-primary"
        style={{ "--value": 70 }}
      >
        70%
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRouter;
