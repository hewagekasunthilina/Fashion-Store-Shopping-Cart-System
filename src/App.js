import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes";


class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Routes/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
