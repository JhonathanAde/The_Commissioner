import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";


const LogoutButton = ({setAuthenticated, setUser, user}) => {
  const history = useNavigate();

  
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    setUser({});
    history.push("/login");
  };

 

  return <div className="nav-links" id="logout-button" onClick={onLogout}>Logout</div>
};

export default LogoutButton;