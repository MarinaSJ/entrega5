import React from "react";
import "./styles.css";

///import produto1 from "../Assets/produto1.PNG";
///import produto2 from "../Assets/produto2.PNG";
//import produto3 from "../Assets/produto3.PNG";

export default function Card( { data, name }) {
  return (
    <div className="fila-products">



      <div className="product-text">
        <h5>{name}</h5>
      </div>
      
    </div>
  );
}

//<div className="product">
//<img src={data} />
//</div>