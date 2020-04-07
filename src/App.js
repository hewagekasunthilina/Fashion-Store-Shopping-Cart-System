import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Common/Header/Header";
import Carousel from "./Components/Common/Carousel/Carousel";

class App extends Component{
  render() {
    return(
        <div>
            <Header/>
            <Carousel/>
        </div>
    )
  }

}

export default App;
