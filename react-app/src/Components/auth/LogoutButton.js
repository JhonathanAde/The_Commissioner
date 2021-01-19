import React from "react";
import { logout } from "../services/auth";

const LogoutButton = ({setAuthenticated, setUser, user}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    setUser({});
  };

  // console.log(user)

  return <button className="nav-button" onClick={onLogout}>Logout</button>
};

export default LogoutButton;