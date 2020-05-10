import React, {Component} from "react";
import Template from "../Template/Template";
import CategoryList from "./CategoryList";

class Admin extends Component {
    render() {
        return (
            <Template>
                <div className="row" style={{marginLeft: '-0.5rem', marginTop: '1rem'}}>
                    <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
                            <div className="card-header" style={{textAlign: 'center'}}>New Category</div>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: 'center'}}>Add New Category</h5>
                                <a href="/AddCategory" className="btn btn-primary" style={{marginLeft: '2.5rem'}}>Add
                                    New Category</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
                            <div className="card-header" style={{textAlign: 'center'}}>New Store Manager</div>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: 'center'}}>Add New Store Manager</h5>
                                <a href="/AddStoreManager" className="btn btn-success" style={{marginLeft: '1.5rem'}}>Add
                                    New Store Manager</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-white bg-warning mb-3" style={{maxWidth: '18rem'}}>
                            <div className="card-header" style={{textAlign: 'center'}}>New User</div>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: 'center'}}>Add New User</h5>
                                <a href="#" className="btn btn-warning" style={{marginLeft: '3.5rem', color: 'white'}}>Add
                                    New User</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
                            <div className="card-header" style={{textAlign: 'center'}}>New Product</div>
                            <div className="card-body">
                                <h5 className="card-title" style={{textAlign: 'center'}}>Add New Product</h5>
                                <a href="#" className="btn btn-info" style={{marginLeft: '3rem'}}>Add New Product</a>
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-primary" role="alert" style={{width: '100%'}}>
                    </div>
                </div>

                <CategoryList>
                </CategoryList>
            </Template>
        )
    }
}

export default Admin;
