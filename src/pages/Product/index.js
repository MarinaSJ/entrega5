import React from "react";
import "./styles.css";

import BagAdd from "../../components/BagAdd/index";
import More from "../../components/More/index";
import Header from "../../components/Header/index";
import{ Link } from "react-router-dom";


function Product({ name="yogoberry", picture="https://yogoberry.com.br/wp-content/uploads/2019/10/Frozen-Yogurt.png", weight="100g", nutri="Informações nutricionais: Carboidratos - 20g; Fibras alimentares - 0g; Açúcar - 0g; Gorduras - 0g; Saturada - 0g; Poliinsaturada - 0g; Monoinsaturada - 0g;  Trans - 0g; Proteínas - 4g; Sódio - 0mg; Potássio - 0mg;  Colesterol - 0mg; Vitamina A - 0%; Vitamina C - 0%;  Cálcio - 0%; Ferro - 0%;   (    As porcentagens são baseadas em uma dieta de 2000 calorias por dia.)" }) {
  return (
    <>
    
      <Header
      title1="Home"
      title2="Quem Somos"
      title3="Produtos"
      title4="Contatos"
      title5="Pesquisar"
      title6="Cadastrar-se"
      />

      <div className="body">
        <div className="main-product">
          <div className="picture-iogurt">
            <img src = {picture} />
          </div>

          <div className="info-iogurt">
            <div className="written">
              <h2>{name}</h2>
              <h3>{weight}</h3>
              <h3>{nutri}</h3>
            </div>
            <div className="interaction">
              <BagAdd />
              <Link style={{textDecoration:"none"}} to={{pathname:"/shoppings", state:{name: name, picture: picture, funcao:"yes"}}} >
                <input type="submit" value="Adicionar a sacola" id="sacola"/>
              </Link>
              <form>
                <input id="cep" placeholder="Adicionar CEP" />
                <input type="submit" value="Calcular Frete" id="frete" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <More name1="Yogochoc"
      name2="Yogogreen"
      name3="Yogopink"
      />
    </>
  );
}

export default Product;
