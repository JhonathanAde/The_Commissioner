import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../services/auth";


const LogoutButton = ({setAuthenticated, setUser, user}) => {
  const history = useHistory();

  
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    setUser({});
    history.push("/login");
  };

  // console.log(user)

  return <div className="nav-links" id="logout-button" onClick={onLogout}>Logout</div>
};

export default LogoutButton;