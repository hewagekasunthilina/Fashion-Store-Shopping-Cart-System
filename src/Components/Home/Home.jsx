import React, {Component} from "react";
import Template from "../Template/Template";
import Carousel from "../Common/Carousel/Carousel";

class Home extends Component{
    render() {
        return (
            <Template>
                <h3>home</h3>
                <Carousel/>
            </Template>
        );
    }
}

export default Home;