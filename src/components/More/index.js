import React from "react";
import "./styles.css";

import Card from "../Card/index";

import{ Link } from "react-router-dom";


function More({ name1, name2, name3 }) {
  const list = [
    {
      id: 1,
    picture: "https://www.almuerzodenegocios.com/wp-content/uploads/2015/04/FotoYogenAca.jpg",
      name: name1
    },
    { id: 2, 
    picture: "https://lh3.googleusercontent.com/proxy/wyB59Kfc_ot8s-suWZyrx1apw4Mc5_AzZvc9YaQ89v6Mx_OnncHzgZj_yKW246Q46PUan7m8YHxGCWBSm9Z5sJYHgHKs5dI7O7AhbaArT5QHvEdxs8hQJbk",
    name: name2 
  },
    { id: 3,
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGbRk6BdGBW5seZDd73RlxCVj_9vpzn11iQ&usqp=CAU",
      name: name3
    }
  ];

  const renderList = list.map((item) => (
    <li key={item.id.toString()}>
      <Link style={{textDecoration:"none"}} to={{pathname:"/product", state:{name: item.name, picture: item.picture}}} >
        <Card picture={item.picture} name={item.name} />
      </Link>
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

export default More;
