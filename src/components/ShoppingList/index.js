import React, { useState } from "react";
import "./styles.css";

import CardShop from '../CardShop/index';

export default function ShoppingList({name="",picture="",quantity=0,funcao="no"}){
    const[productList,setProductList] = useState([
        {
            id:1,
            name:"Primeiro item",
            picture:"https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-081-mountain-rock.png",
            quantity:0
        }
        ]);
    const renderList = productList.slice().reverse().map(item=>(
        <li key = {item.id.toString()}>
            <CardShop picture={item.picture} name={item.name} />
        </li>
    ));
    function addProduct(){
        const length =productList.length;
        const newProduct = {
            id: length + 1,
            name: {name},
            picture:{picture},
            quantity:{quantity}
        };
        const newProductList=productList.concat(newProduct);
        setProductList(newProductList);
    };

    return (
          <div className="products-column">
              if({funcao}!= "no" ){addProduct()}
            <ul>{renderList}</ul>
          </div>
    );


}