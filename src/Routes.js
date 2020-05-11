import React, {Component, Fragment} from "react";
import { Route } from "react-router-dom";

import Admin from "./Components/Admin/Admin";
import StorePanel from "./Components/StoreManager/StorePanel";
import AddProduct from "./Components/StoreManager/AddProduct";
import Home from "./Components/Home/Home";

import AddToCart from "./Components/User/AddToCart";
import AddCategory from "./Components/Admin/AddCategory";
import AddStoreManager from "./Components/Admin/AddStoreManager";
import Payment from "./Components/User/Payment";

import LoginButton from "./Components/Login/LoginButton";
import UserProfile from "./Components/Profile/UserProfile";
import CategoryList from "./Components/Admin/CategoryList";

class Routes extends Component{
    render() {
        return (
            <Fragment>
                {/************************** Admin Part ***************************/}
                <Route path={"/"} exact component={Home}/>
                <Route path={"/LoginButton"} exact component={LoginButton}/>
                <Route path={"/Admin"} exact component={Admin}/>
                <Route path={"/StorePanel"} exact component={StorePanel}/>
                <Route path={"/AddToCart"} exact component={AddToCart}/>
                <Route path={"/AddCategory"} exact component={AddCategory}/>
                <Route path={"/BackAdmin"} exact component={Admin}/>
                <Route path={"/AddStoreManager"} exact component={AddStoreManager}/>
                <Route path={"/CategoryList"} exact component={CategoryList}/>
                <Route path={"/Payment"} exact component={Payment}/>
                <Route path={"/UserProfile"} exact component={UserProfile}/>

                {/**********************************************************************/}

                {/************************** Store Manager Part ***************************/}

                <Route path={"/AddProduct"} exact component={AddProduct}/>

                {/**********************************************************************/}

            </Fragment>
        );
    }
}

export default Routes;
