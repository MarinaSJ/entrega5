import React from "react";
import "./styles.css";

export default function ShoppingList({name,picture,quantity}){
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
        const length=productList.length;
        const newProduct = {
            id: lenght + 1,
            name: {name},
            picture:{picture},
            quantity:{quantity}
        };
        const newProductList=product.concat(newProduct);
        setProductList(newProductList);
    };

    return (
          <div className="products-column">
            <ul>{renderList}</ul>
          </div>
    );


}