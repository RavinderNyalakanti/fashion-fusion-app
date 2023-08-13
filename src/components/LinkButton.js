// LinkButton.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './LinkButton.css'

const LinkButton = ({ id, children, activeButton, setActiveButton }) => {
  const isActive = activeButton === id;

  const handleClick = () => {
    setActiveButton(isActive ? null : id);
  };

  return (
    <Link to={id} className={`button-link ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default LinkButton;
