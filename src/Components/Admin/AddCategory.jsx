import React, {Component} from "react";

class AddCategory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            category_name: '',
            category_number: ''
        };

        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handleCategoryNumberChange = this.handleCategoryNumberChange.bind(this);
        this.handleCategoryIdChange = this.handleCategoryIdChange.bind(this);
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

    handleCategoryIdChange(e) {
        this.setState({
                id: e.target.value
            },
            () => {
            });
    }

    handleSubmit = async (e) => {

        e.preventDefault();
        const categoryObject = {
            id: this.state.id,
            category_name: this.state.category_name,
            category_number: this.state.category_number
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
            <div style={{ marginLeft:'10%', marginTop:'8rem'}}>
                <h3 style={{marginLeft: '24rem'}}>Add New Category</h3>
                <form onSubmit={this.handleSubmit} action="/Backend/Routes/Fashion.routes.js" method="POST"  style={{width:'50%', marginLeft:'16rem'}}>
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
