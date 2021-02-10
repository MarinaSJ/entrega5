import React from 'react';
import './styles.css';
//import logoheader from '../Assets/logoheader.png';



function Header({title1, title2, title3, title4, title5, title6}){
    return(

        <div className="top-header">



            <div className="menu-header">

                <h4>{title1}</h4>
                <h4>{title2}</h4>
                <h4>{title3}</h4>
                <h4>{title4}</h4>
                <h4>{title5}</h4>
                <h4>{title6}</h4>

            </div>
            
        </div>
    


    )


}

export default Header;

//<div className="logo-header">
//<img src={logoheader}/> 

//</div>