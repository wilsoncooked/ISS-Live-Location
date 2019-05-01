import React from 'react'
import '../Styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="container">
      <div className="planet"></div>
      <div className="gravity">
        <div className="satellite"></div>
      </div>
      <button className="actionbutton">EXPLORE</button>
    </div>
  );
}

export default LandingPage;