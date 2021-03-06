import React from 'react';
import { Link } from 'react-router-dom';
import '../LogoIntro/LogoIntro.scss'

const LogoIntro = () => {
  return <div className="wrap">
  <div className="LogoContainer">
    <h1 className="H1">Applergic</h1>
    <p className="P">
      Mi guía alimentaria
    </p>
  </div>
  <div className="divLogo">
  <Link className="LinkLogo" to="/Intro"></Link>
  </div>
  </div>;
};

export default LogoIntro;
