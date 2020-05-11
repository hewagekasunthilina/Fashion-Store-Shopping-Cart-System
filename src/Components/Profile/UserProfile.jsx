import React, {Component} from 'react';
import Template from "../Template/Template";

class UserProfile extends Component {
    render() {
        return (
            <Template>
                <div className="container">
                        <div className="row">

                            <div className="col-6">
                                <div className="card-back">
                                <div className="card text-center ">
                                <h2 className="d-flex justify-content-center">User Name</h2>
                                <br></br>
                                <br>

                                </br>
                                <div className="row">
                                    <div className="col-6">
                                        <label className="">Email Address</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text"/>
                                    </div>
                                </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="">Password</label>
                                        </div>
                                        <div className="col-6">
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="">NIC</label>
                                        </div>
                                        <div className="col-6">
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="">Baught List</label>
                                        </div>
                                        <div className="col-6">
                                            <textarea id="bughtList" rows="5"></textarea>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <label className="">Remove Account</label>
                                        </div>
                                        <div className="col-6">
                                           //display a messege

                                        </div>
                                    </div>
                                </div>
                        </div>

                            </div>
                        <div className="col-6">
                                    <input type="file"/>
                        </div>

                        </div>
                </div>
            </Template>
        );
    }
}

export default UserProfile;
