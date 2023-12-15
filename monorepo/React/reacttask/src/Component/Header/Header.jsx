import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = ({ isClicked }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (isClicked) {
      setStep(2);
    }
  }, [isClicked]);

  const handleBack = () => {
    navigate(-1); 
    setStep(1); 
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Choose Service</h1>
          <p>Step {step}/2</p>
        </div>
        {isClicked && (
          <button className='button' onClick={handleBack}>Back</button>
        )}
      </div>
    </div>
  );
};

export default Header;
