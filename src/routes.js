import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Bag from "./pages/Bag";
import Product from "./pages/Product";
import Main from "./pages/Main";


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/product" component={Product} />
                <Route path="/shoppings" component={Bag} />
            </Switch>
        </BrowserRouter>
    )
}