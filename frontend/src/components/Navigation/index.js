import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">
          <div className="navbar-login">
            Log In
          </div>
        </NavLink>
        <NavLink to="/signup">
          <div className="navbar-signup">
            Sign Up
          </div>
        </NavLink>
      </>
    );
  }

  

  return (
    <>
      <nav className="navbar">
        <div className="navbar-contents">
          <div className="navbar-logo"></div>
          <NavLink exact to="/">
            <div className="navbar-home">
              Home
            </div>
          </NavLink>
          <NavLink to="/stream">
            <div className="navbar-stream">
              Stream
            </div>
          </NavLink>
          <NavLink to="/library">
            <div className="navbar-library">
              Library
            </div>
          </NavLink>
          <input type="text"></input>
          {isLoaded && sessionLinks}
        </div>
      </nav>
        <div className="test">
          <p>heyyyyyyyy</p>
        </div>
    </>
  );
}

export default Navigation;