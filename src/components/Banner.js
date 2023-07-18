import React from "react";
import logo from "../img/logoPlant.jpg";

function Banner() {
  const titre = "La maison jungle";

  const bannerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyle = {
    height: "10vh",
    width: "5vw",
    marginRight: "10px",
  };

  return (
    <div style={bannerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <h1>{titre}</h1>
    </div>
  );
}

export default Banner;
