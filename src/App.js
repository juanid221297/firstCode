import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <div className='container'>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <div className="navbar-brand" >{props.title}</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" >Home</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" >Link</div>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </div>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" >About</div></li>
                  <li><div className="dropdown-item" >Another action</div></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><div className="dropdown-item" >Something else here</div></li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled" aria-disabled="true">Disabled</div>
              </li>
            </ul>
            <div className="div d-flex">
              <div className='bg-primary rounded mx-2' style={{height:'40px'     }}></div>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="radio" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
}

export default Navbar;
