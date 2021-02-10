import React from 'react';
import './styles.css';

import BagAdd from '../BagAdd/index';

import iogurte from '../Assets/iogurte.jpeg';

function Product({name, weight, nutri}){
  return(
    <div className="body">
      <div className="main-product">
        <>
        <div className="picture-iogurt">
            <img src={iogurte}/> 
        </div>

        <div className="info-iogurt">

          <div className="written">
            <h2>{name}</h2>
            <h3>{weight}</h3>
            <h3>{nutri}</h3>
          </div>

          <BagAdd/>
        </div>

          <form>
            <input id="cep" placeholder="Adicionar CEP"/>
            <input type="submit" value="Calcular Frete" id="frete"/>
          </form>
        </>
        </div>
      </div>
    </div>

  )
}

export default Product;
