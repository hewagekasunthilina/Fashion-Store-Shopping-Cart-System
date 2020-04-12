import React, {Component, Fragment} from "react";
import { Route } from "react-router-dom";

import Admin from "./Components/Admin/Admin";
import StorePanel from "./Components/StoreManager/StorePanel";
import Home from "./Components/Home/Home";

class Routes extends Component{
    render() {
        return (
            <Fragment>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/Admin"} exact component={Admin}/>
                <Route path={"/StorePanel"} exact component={StorePanel}/>
            </Fragment>
        );
    }
}

export default Routes;