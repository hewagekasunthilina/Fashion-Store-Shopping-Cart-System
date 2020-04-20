import React, {Component, Fragment} from "react";
import { Route } from "react-router-dom";

import Admin from "./Components/Admin/Admin";
import StorePanel from "./Components/StoreManager/StorePanel";
import Home from "./Components/Home/Home";
import AddToCart from "./Components/User/AddToCart";
import AddCategory from "./Components/Admin/AddCategory";

class Routes extends Component{
    render() {
        return (
            <Fragment>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/Admin"} exact component={Admin}/>
                <Route path={"/StorePanel"} exact component={StorePanel}/>
                <Route path={"/AddToCart"} exact component={AddToCart}/>
                <Route path={"/AddCategory"} exact component={AddCategory}/>
                <Route path={"/BackAdmin"} exact component={Admin}/>
            </Fragment>
        );
    }
}

export default Routes;
