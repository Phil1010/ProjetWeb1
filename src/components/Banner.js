import React from 'react';
import logo from '../img/logoPlant.jpg';
import '../styles/Banner.css';

function Banner() {
  const titre = 'La maison jungle';

  const bannerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={bannerStyle}>
      <img className="lmj-logo" src={logo} alt="Logo" />
      <div className="lmj-banner">
        <h1>{titre}</h1>
      </div>
    </div>
  );
}

export default Banner;
