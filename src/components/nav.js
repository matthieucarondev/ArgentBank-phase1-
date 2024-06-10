
import { NavLink } from 'react-router-dom';

import logo from '../imgs/argentBankLogo.png';
import {  useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authAction';
import { profileReset } from '../actions/userAction';


const Nav = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const  firstName  = useSelector((state) => state.user.firstName);

  
  const handleLogout = ()=> {
    dispatch(logout());
    dispatch(profileReset());
  };
  // Sauvegarde du prénom dans le localStorage lors de la connexion
  if (token && firstName) {
    localStorage.setItem('firstName', firstName);
  }

  // Récupération du prénom depuis le localStorage
  const storedFirstName = localStorage.getItem('firstName');
  return (
    <>
    {token ? (
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {storedFirstName || firstName}
          </NavLink>
       
        <NavLink onClick={handleLogout} to="/" className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink> 
        </div>
      </nav>
    ) : (
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to="/Sign-In">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    )}
  </>
);
};


export default Nav;