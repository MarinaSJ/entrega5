import "./styles.css";

import React from "react";
import "./global.css";
import Header from './components/Header/index';
//import Descriptions from './components/Descriptions/index';
//import Products from './components/Products/index';
//import Down from './components/Down/index';
import Brand from './components/Brand/index';
import Product from './components/Product/index';



function App() {


  return (
    <>
    <div>
      <Header title1="Home" title2="Quem Somos" title3="Produtos" title4="Contatos" title5="Pesquisar" title6="Cadastrar-se"/>
      
      <Brand />

    </div>
  
    <div>
      <Product name="yogoberry"
      weight="100g"
      nutri="Nao calorico" />
    </div>
    </>
  );
}

export default App;


      //<Descriptions maintitle="natural whey" description="Nas versões iogurte e shake, a linha Natural Whey combina os ingredientes naturais com a riqueza proteica que só o leite pode oferecer. Os produtos são indicados tanto para o consumo pós e pré-treino, quanto para lanches intermediários e receitas. Nada além da natureza: os produtos da linha Natural Whey estão livres de conservantes, são adoçados com stévia (adoçante natural) e contêm aromas e corantes naturais."/>//
      //<Products product1="natural whey 500g (28g de proteína) - jabuticaba" product2="natural whey 500g (28g de proteína) - morango" product3="natural whey 500g (28g de proteína) - cookies and cream"/>//
      //<Down />//