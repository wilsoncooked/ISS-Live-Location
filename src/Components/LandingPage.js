import React from 'react'
import ReactDOM from 'react-dom';
import '../Styles/LandingPage.css'
import App from '../App';

const handleButtonClick = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

const LandingPage = () => {
  return (
    <div className="container">
      <div className="planet"></div>
      <div className="gravity">
        <div className="satellite"></div>
      </div>
      <button
        className="actionbutton"
        onClick={handleButtonClick}
      >
        EXPLORE
      </button>
    </div>
  );
}

export default LandingPage;