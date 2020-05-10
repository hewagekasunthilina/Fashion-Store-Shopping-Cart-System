import React, {Component} from "react";
import Template from "../Template/Template";
import Carousel from "../Common/Carousel/Carousel";
import CategoryGrid from "./CategoryGrid";

class Home extends Component{
    render() {
        return (
            <Template>
                <Carousel/>
                <h1 id="adminTitle">SHOP BY CATEGORY</h1>
                <CategoryGrid/>
            </Template>
        );
    }
}

export default Home;
