import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
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
        <SignupFormModal />
      </>
    );
  }

  const buttonClick = (e) => {
    let id = e.target.id;
    if (id === "home") id = "";
    history.push(`/${id}`)
  }

  const searchSubmit = (e) => {
    e.preventDefault();
    let search = document.getElementById("searchbar").value
    document.getElementById("searchbar").value =""
    console.log(search)
    history.push(`/search/${search}`)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-contents">
          <div id ="home" className="navbar-logo" onClick={(e)=> buttonClick(e)}>
            <img className="logo-img" src="https://res.cloudinary.com/mellowcloud123/image/upload/v1619719796/mellowcloud-logo_ibjlsm.png" alt="logo" />
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
            <form method ="post" onSubmit={(e)=> searchSubmit(e)}>
              <input id="searchbar" type="text" placeholder="Search"></input>
              <button type="submit" id="search-btn">Go</button>
            </form>
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