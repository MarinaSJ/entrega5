import React from 'react';
import './styles.css';

function Descriptions({maintitle, description}){

    return(

        <div className="text-product">
            <h1>{maintitle}</h1>
            <h5>{description}</h5>

        </div>
    )


}

export default Descriptions;