import React, {Component} from "react";
import "./Admin.css";
import Template from "../Template/Template";
import CategoryList from "./CategoryList";

class Admin extends Component {
    render() {
        return (
            <Template>
                <h1 id="adminTitle">Administrative Panel</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{width:'18rem'}}>
                                <img className="card-img-top" src="https://www.alphashooters.com/wp-content/uploads/2019/01/sony-sel85f18-gsd-puppy-DSC00116-1300px.jpg" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title" id="cardTitle">Store Category</h5>
                                        <a href="/AddCategory" className="btn btn-primary" id="linkBtn">Add Category</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width:'18rem'}}>
                                <img className="card-img-top" src="https://www.alphashooters.com/wp-content/uploads/2019/01/sony-sel85f18-gsd-puppy-DSC00116-1300px.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title" id="cardTitle">Store Roles</h5>
                                    <a href="/AddStoreManager" className="btn btn-primary" id="linkBtn">Add New Role</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width:'18rem'}}>
                                <img className="card-img-top" src="https://www.alphashooters.com/wp-content/uploads/2019/01/sony-sel85f18-gsd-puppy-DSC00116-1300px.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title" id="cardTitle">Store Products</h5>
                                    <a href="/CategoryList" className="btn btn-primary"  id="linkBtn">Product List</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               <CategoryList>

               </CategoryList>

                <hr id="hrLine">

                </hr>

            </Template>
        )
    }
}

export default Admin;
