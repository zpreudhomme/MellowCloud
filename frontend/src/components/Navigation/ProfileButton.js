import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="navbar-profile">
        <button className="profile-btn" onClick={openMenu}>
          <div className ="profile-data">
            <i className="fas fa-user-circle profile-icon" />
            <p>{user.username}</p>
          </div>
        </button>
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <p>{user.username}</p>
          <p>{user.email}</p>
          <button onClick={logout}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default ProfileButton;