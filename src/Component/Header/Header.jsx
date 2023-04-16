import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContextAPI } from "../AuthContext/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(authContextAPI);

  const logOutUser = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-300">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/profile">
          Profile
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logOutUser} className="btn btn-xs">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">Sign in</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
