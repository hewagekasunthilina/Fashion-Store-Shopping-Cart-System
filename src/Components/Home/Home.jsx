import React, {Component} from "react";
import Template from "../Template/Template";
import Carousel from "../Common/Carousel/Carousel";

class Home extends Component{
    render() {
        return (
            <Template>
                <Carousel/>
            </Template>
        );
    }
}

export default Home;