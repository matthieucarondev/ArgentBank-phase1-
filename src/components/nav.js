
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
            {firstName}
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