import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <a id="upload-btn" href="/upload">Upload</a>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">
          <div className="navbar-signup">
            Sign Up
          </div>
        </NavLink>
      </>
    );
  }

  const buttonClick = (e) => {
    let id = e.target.id;
    if (id === "home") id = "";
    history.push(`/${id}`)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-contents">
          <div id ="home" className="navbar-logo" onClick={(e)=> buttonClick(e)}>
            <img className="logo-img" src="https://mellowcloud.s3-us-west-1.amazonaws.com/mellowcloud-logo.png" alt="logo" />
          </div>
          <div className="navbar-left">
            <div id="home" className="navbar-home" onClick={(e)=> buttonClick(e)}>
              Home
            </div>
            
            <div id="stream" className="navbar-stream" onClick={(e)=> buttonClick(e)}>
              Stream
            </div>
    
            <div id="library" className="navbar-library" onClick={(e)=> buttonClick(e)}>
              Library
            </div>
          </div>
          <div className="navbar-search">
            <input id="searchbar" type="text" placeholder="Search"></input>
          </div>
          <div className="navbar-right">
            {isLoaded && sessionLinks}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;