import React from "react";
import { logout } from "../services/auth";

const LogoutButton = ({setAuthenticated, setUser, user}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    setUser({});
  };

  // console.log(user)

  return <div className="nav-links" id="logout-button" onClick={onLogout}>Logout</div>
};

export default LogoutButton;