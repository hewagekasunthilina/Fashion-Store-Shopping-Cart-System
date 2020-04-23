import React, {Component} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
const BASE_URL = 'http://localhost:3000';

class AddCategory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            category_name: '',
            category_number: ''
        };

        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handleCategoryNumberChange = this.handleCategoryNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryNameChange(e) {

        this.setState({
                category_name: e.target.value
            },
            () => {
            });
    }

    handleCategoryNumberChange(e) {

        this.setState({
                category_number: e.target.value
            },
            () => {
            });
    }

    handleSubmit(e) {

        e.preventDefault();

        const categoryObject = {
            category_name: this.state.category_name,
            category_number: this.state.category_number
        };

        console.log(categoryObject);

      axios.post(`${BASE_URL}/Backend/category`, categoryObject)
          .then((res) => {
              console.log(res.data);

          if(res.data == true) {
              alert('Category Added');
          } else {
              alert('Error');
          }
    }).catch((error)=> {
        console.log(error)
    });

      this.setState({
          category_name: '',
          category_number: ''
      })
    }
    render() {
        return(

            <div style={{ marginLeft:'10%', marginTop:'8rem'}}>
                <h3 style={{marginLeft: '24rem'}}>Add New Category</h3>
                <form onSubmit={this.handleSubmit} action="/Backend/category" method="POST"  style={{width:'50%', marginLeft:'16rem'}}>
                    <div className="form-group">
                        <label>New Category Name:  </label>
                        <input type="text"
                               className="form-control"
                               id="category_name"
                               onChange={this.handleCategoryNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>New Category Number: </label>
                        <input type="text"
                               className="form-control"
                               id="category_number"
                               onChange={this.handleCategoryNumberChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Category" className="btn btn-primary" style={{marginLeft:'10rem', width:'15rem'}}/>
                        <a className="btn btn-primary btn-sm" href="/BackAdmin" role="button" style={{marginLeft:'8rem'}}>Back</a>
                    </div>
                </form>
            </div>

        )
    }
}
export default AddCategory;
