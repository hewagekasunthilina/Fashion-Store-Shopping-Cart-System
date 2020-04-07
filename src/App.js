import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AdminPanel from "./Components/Admin/AdminPanel";
import PrimarySearchAppBar from "./Components/Common/Header/Header";
import RecipeReviewCard from "./Components/Common/Footer/Footer";


class App extends Component{
  render() {
    return(
        <div>
           <PrimarySearchAppBar/>
           <RecipeReviewCard/>

        </div>
    )
  }

}

export default App;
