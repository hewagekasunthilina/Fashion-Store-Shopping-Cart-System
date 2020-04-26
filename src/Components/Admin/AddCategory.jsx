import React, {Component} from "react";
import "./AddCategory.css"

class AddCategory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            category_id: '',
            category_name: '',
        };

        this.handleCategoryIdChange = this.handleCategoryIdChange.bind(this);
        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryIdChange(e) {
        this.setState({
                category_id: e.target.value
            },
            () => {
            });
    }

    handleCategoryNameChange(e) {
        this.setState({
                category_name: e.target.value
            },
            () => {
            });
    }

    handleSubmit = async (e) => {

        e.preventDefault();
        const categoryObject = {
            category_id: this.state.category_id,
            category_name: this.state.category_name,
        };

        const response = await fetch("http://localhost:4000/api/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryObject)
        });

        const responseData = await response.json();
        console.log(responseData);
        console.log(categoryObject);

    };
    render() {
        return(
            <div className="container">
                <h3 style={{marginLeft: '24rem', marginBottom:'1rem', paddingTop:'1rem'}}>Add New Category</h3>
                <form onSubmit={this.handleSubmit} action="/Backend/Routes/Fashion.routes.js" method="POST">
                    <div className="form-group">
                        <label>New Category ID:</label>
                        <input type="text"
                               className="form-control"
                               id="id"
                               onChange={this.handleCategoryIdChange}/>
                    </div>
                    <div className="form-group">
                        <label>New Category Name:</label>
                        <input type="text"
                               className="form-control"
                               id="category_name"
                               onChange={this.handleCategoryNameChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Category" className="btn btn-primary" style={{width:'15rem'}}/>
                        <a className="btn btn-primary btn-sm" href="/BackAdmin" role="button" style={{marginLeft:'28.4rem', marginBottom:'2rem', marginTop:'-2rem'}}>Back</a>
                    </div>
                </form>
            </div>

        )
    }
}
export default AddCategory;
