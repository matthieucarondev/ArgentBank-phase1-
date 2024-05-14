import React from 'react';
import logo from "../../img/argentBankLogo.png";

const Nav = () => {
    return (
        <div>
            <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="/sign-in">
            {/* FontAwesome icon */}
            <i className="fa fa-user-circle"></i>
            Connexion
          </a>
        </div>
      </nav>
        </div>
    );
};

export default Nav;