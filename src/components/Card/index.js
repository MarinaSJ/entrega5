import React from "react";
import "./styles.css";

import{ Link } from "react-router-dom";


export default function Card( { picture, name }) {
  return (
    <Link style={{textDecoration:"none"}} to={{pathname:"/product", state:{name: name, picture: picture}}} >
      <div className="product-item">
        <div className="product">
          <img src={picture} />
        </div>

        <div className="product-text">
          <h5>{name}</h5>
        </div>
        
      </div>
    </Link>


  );
}

