import React from "react";
import "./styles.css";

import Card from "../Card/index";

function Products({ name1, name2, name3 }) {
  const list = [
    {
      id: 1,
      product: "product1",
      name: name1
    },
    { id: 2, product: "product2", name: name2 },
    { id: 3, product: "product3", name: name3 }
  ];

  const renderList = list.map((item) => (
    <li key={item.id.toString()}>
      <Card data={item.product} name={item.name} />
    </li>
  ));


  return (
    <div className="container">
      <div className="title-container">
        <h1>Outros produtos que pode gostar:</h1>
      </div>
      <div className="products-line">
        <ul>{renderList}</ul>
      </div>
    </div>
  );
}

export default Products;
