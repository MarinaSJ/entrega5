import React, { useState } from 'react';
import './styles.css';


export default function BagAdd(){
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1)
  }

  function reduce(){
    if(counter<=0){
      setCounter(0)
    }
      
    else{
      setCounter(counter - 1)
    }
    
  }

  return(
    <div className="bag">
      <div className="conteiner">
        <div className="title-conteiner">
          <h1>Quantidade: </h1>
        </div>
        <div className="counter-container">
          <h2>{counter}</h2>
          <div className="buttons">
            <button onClick={increment}>+</button>
            <button onClick={reduce}>-</button>
          </div>        
        </div>
      </div>
      
    </div>
  )
}