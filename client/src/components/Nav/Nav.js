import React from "react";
const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Search NYT
        </a>
        
      </div>
      <ul className="nav nav-pills float-right">
          <li className="nav-item"><a href="/" className="btn btn-default nav-link">Home</a></li>
          <li className="nav-item">
        <a href="/saved" className="btn btn-info nav-link">Saved Articles</a>
        </li>
        </ul>
    </div>
  </nav>;

export default Nav;
