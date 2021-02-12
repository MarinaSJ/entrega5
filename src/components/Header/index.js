import React from 'react';
import './styles.css';
import logoheader from '../Assets/logoheader.png';
import{ Link } from "react-router-dom";



function Header({title1="Home", title2="Quem Somos", title3="Produtos", title4="Contatos", title5="Pesquisar", title6="Cadastrar-se"}){
    return(

        <div className="top-header">
            <div className="logo-header">
                <img src={logoheader}/>
                <div className="brand">
                    <h2>ioGO!</h2>
                </div>
            </div>

            <div className="menu-header">

                <h4>{title1}</h4>
                <h4>{title2}</h4>
                <h4>{title3}</h4>
                <h4>{title4}</h4>
                <h4>{title5}</h4>
                <h4>{title6}</h4>
                <Link style={{textDecoration:"none"}} to={{pathname:"/shoppings"}} >
                    <h4>Sacola</h4>
                </Link>

                

            </div>
            
        </div>
    


    )


}

export default Header;

