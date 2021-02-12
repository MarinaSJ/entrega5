import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';


function Products(props){
    
    return(
    
        <div className="fila1-products">

            <img src="https://yogoberry.com.br/wp-content/uploads/2019/10/Frozen-Yogurt.png"/>
            <h5>{props.product}</h5>
                            

    


            {/*<div className="product-list">
                <div className="product1">
                    <img src={produto1}/>
                            
                </div>
                <div className="product2">
                    <img src={produto2}/>
                    
                </div>
                <div className="product3">
                    <img src={produto3}/>
            
                </div>
            </div>    
            <div className="product-list-text">
                <div className="product1-text">
                    <h5>{product1}</h5> 
                </div>
                <div className="product2-text">
                    <h5>{product2}</h5> 
                </div>
                <div className="product3-text">
                    <h5>{product3}</h5> 
                </div>
                            
                
            </div>*/}
        </div>

        
    
    )

}

export default Products;