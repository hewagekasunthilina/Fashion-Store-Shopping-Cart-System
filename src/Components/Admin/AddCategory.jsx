import React, {Component} from "react";
import "./AddCategory.css";

class AddCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category_id: '',
            category_name: '',
            category_description: ''
        };

        this.handleCategoryIdChange = this.handleCategoryIdChange.bind(this);
        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handleCategoryDescriptionChange = this.handleCategoryDescriptionChange.bind(this);
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

    handleCategoryDescriptionChange(e) {
        this.setState({
                category_description: e.target.value
            },
            () => {
            });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const categoryObject = {
            category_id: this.state.category_id,
            category_name: this.state.category_name,
            category_description: this.state.category_description
        };

        this.setState({
            category_id: '',
            category_name: '',
            category_description: ''
        });

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
        return (
            // <div className="container" id= "backPanel">
            //     <h3 style={{marginLeft: '24rem', marginBottom: '1rem', paddingTop: '1rem'}}>Add New Category</h3>
            //     <form id="categoryForm"  onSubmit={this.handleSubmit} action="/Backend/Routes/Fashion.routes.js" method="POST">
            //         <div className="form-group">
            //             <label>New Category ID:</label>
            //             <input type="text"
            //                    className="form-control"
            //                    id="category_id"
            //                    onChange={this.handleCategoryIdChange}
            //                    value={this.state.category_id}/>
            //         </div>
            //         <div className="form-group">
            //             <label>New Category Name:</label>
            //             <input type="text"
            //                    className="form-control"
            //                    id="category_name"
            //                    onChange={this.handleCategoryNameChange}
            //                    value={this.state.category_name}/>
            //         </div>
            //         <div className="form-group">
            //             <label>New Category Description:</label>
            //             <input type="text"
            //                    className="form-control"
            //                    id="category_description"
            //                    onChange={this.handleCategoryDescriptionChange}
            //                    value={this.state.category_description}/>
            //         </div>
            //         <div className="form-group">
            //             <input type="submit" value="Add Category" className="btn btn-primary" style={{width: '15rem'}}/>
            //             <a className="btn btn-primary btn-sm" href="/BackAdmin" role="button"
            //                style={{marginLeft: '28.4rem', marginBottom: '2rem', marginTop: '-2rem'}}>Back</a>
            //         </div>
            //     </form>
            // </div>

            <div className="card text-white bg-link mb-3"
                 style={{marginLeft: '5%', marginRight: '5%', marginTop: '1%'}}>
                <div className="card-header">
                    <h3 className="card-title" style={{
                        textAlign: 'center',
                        fontFamily: 'Lucida Console", Courier, monospace',
                        fontWeight: 'bold',
                        color: '#6b0505'
                    }}>ADD New Category</h3>
                </div>

                <div className="row">

                    <div className="col-md-3">
                        <img className="card-img-top"
                             src="https://lh3.googleusercontent.com/proxy/dEl7S9MmAcGCjB0wTu1ZG89N9Rr6mUv1V0HtZMgH-yAKmJKJXARLIf-L5oZlbU4hurqept-ONnGUC0vSCpA7ycTu1oG4cDYfDCOGP4xPOxZssQb16jA0DA-_2H52hWusuDEhodyk3_xqO6ibg0ezJraG-H9W-UA"
                             alt="Card image cap"
                             style={{maxWidth: '20rem', maxHeight: '24rem', marginTop: '25%', marginLeft: '10%'}}/>
                    </div>

                    <div className="col-md-6">
                        <div className="card-body">
                            <div className="card text-white bg-info mb-3" style={{marginTop: '2%'}}>
                                <div className="card-body text-dark">
                                    <form onSubmit={this.handleSubmit} action="/Backend/Routes/Fashion.routes.js"
                                          method="POST">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="product_code">Category Code</label>
                                                <input type="text"
                                                       className="form-control"
                                                       id="product_code"
                                                       onChange={this.handleCategoryIdChange}
                                                       value={this.state.category_id}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="product_name">Category Name</label>
                                                <input type="text"
                                                       className="form-control"
                                                       id="product_name"
                                                       onChange={this.handleCategoryNameChange}
                                                       value={this.state.category_name}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="product_description">Category Description</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="product_description"
                                                   onChange={this.handleCategoryDescriptionChange}
                                                   value={this.state.category_description}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPic">Add Category Image</label>
                                            <input type="file"
                                                   className="form-control-file"
                                                   id="inputPic"
                                            />
                                        </div>
                                        <div><br></br></div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group" style={{textAlign: 'center'}}>
                                                    <input type="submit" value="Add New Category"
                                                           className="btn btn-danger" style={{maxWidth: '30rem'}}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group" style={{textAlign: 'center'}}>
                                                    <input type="submit" value="View Category List"
                                                           className="btn btn-danger" style={{maxWidth: '30rem'}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3">
                        <img className="card-img-top"
                             src="https://www.uidownload.com/files/259/1021/205/fashion-women-illustrator-02-vector-material.jpg"
                             alt="Card image cap"
                             style={{maxWidth: '20rem', maxHeight: '25rem', marginTop: '25%', marginLeft: '-10%'}}/>
                    </div>

                </div>

            </div>

        )
    }
}

export default AddCategory;
