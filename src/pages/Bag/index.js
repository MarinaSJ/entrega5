import React from "react";
import "./styles.css";

import Header from "../../components/Header/index";
import ShoppingList from "../../components/ShoppingList";


export default function Bag({name,picture,quantity=1}){
    return(
        <>
            <Header
            title1="Home"
            title2="Quem Somos"
            title3="Produtos"
            title4="Contatos"
            title5="Pesquisar"
            title6="Cadastrar-se"
            />
            <ShoppingList
            name={name}
            picture={picture}
            quantity={quantity}
            />
        </>
    )
}
