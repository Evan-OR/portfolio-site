import React from 'react';

function NavBar() {
  return (
    <div id="navbar" className="nav-wrapper">
      <div className="nav-option">
        <a className="nav-link" href="#About">
          About Me
        </a>
      </div>
      <div className="nav-option">
        <a className="nav-link" href="#Projects">
          Projects
        </a>
      </div>
      {/* <div className="nav-option">
        <a className="nav-link" href="#Contact">
          Contact
        </a>
      </div> */}
    </div>
  );
}

export default NavBar;
