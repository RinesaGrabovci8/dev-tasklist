import React from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Card = (prop) => {
    const {image, title, link, onClick,  isClicked} = prop;

    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
  
  return (
    <Link to={`${link}`} style={{textDecoration:'none'}} onClick={handleClick}>
    <div className="card">
      <img src={image} alt="Card Image" />
      <div className="card-content">
        <h1>{title}</h1>
      </div>
      <div className="next-button" >
        <FontAwesomeIcon icon={faChevronRight} style={{color: "#6e6e6e",}} />
      </div>
    </div>
    </Link>
  )
}

export default Card