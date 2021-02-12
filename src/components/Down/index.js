import React from 'react';
import './styles.css';
import logoheader from '../Assets/logoheader.png';
import redes from '../Assets/redes.png';

function Down(){
    return(
    <div className="princ">

        <div className="downlogo">
            <div className="downlogo-marca">
                <h2>ioGO!</h2>
            </div>

            <div className="downlogo-foto">   
                <img src={redes} height="40em" />
            </div>
            
            
            
        </div>


        <div className="rigths">
            <h5>2021 / ioGO! / Todos os direitos reservados</h5>

        </div>

    </div>
    )

}

export default Down;