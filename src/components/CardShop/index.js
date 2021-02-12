import React from 'react';
import './styles.css';

export default function CardShop( { picture, name }) {
    return (
      <div className="product-item">
        <div className="product">
          <img src={picture} />
        </div>
  
        <div className="product-text">
          <h5>{name}</h5>
        </div>
        
      </div>
    );
  }
  