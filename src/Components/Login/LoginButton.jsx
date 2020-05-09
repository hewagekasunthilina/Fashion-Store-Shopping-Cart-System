import React, {Component} from 'react';
import Template from "../Template/Template";
import "./Login.css";
class LoginButton extends Component {

    constructor(props) {
        super(props);
        //setting up initial state
        this.state= {
            sign_up_Name : '',
            sign_up_NIC : '',
            sign_in_Email1 : '',
            sign_upPassword : '',
            sign_upPassword_confirm : ''
        };

        this.handleSign_up_Name = this.handleSign_up_Name.bind(this);
        this.handleSign_up_NIC = this.handleSign_up_NIC.bind(this);
        this.handleSign_in_Email = this.handleSign_in_Email.bind(this);
        this.handleSign_upPassword = this.handleSign_upPassword.bind(this);
        this.handleSign_upPassword_confirm = this.handleSign_upPassword_confirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

       handleSign_up_Name(e){
            this.setState({
                sign_up_name: e.target.value
                },
                () => {
                });
        }

    handleSign_up_NIC(e){
        this.setState({
                sign_up_NIC: e.target.value
            },
            () => {
            });
    }
    handleSign_in_Email(e){
        this.setState({
                sign_in_Email1: e.target.value
            },
            () => {
            });
    }
    handleSign_upPassword(e){
        this.setState({
                sign_upPassword: e.target.value
            },
            () => {
            });
    }
    handleSign_upPassword_confirm(e){
        this.setState({
                sign_upPassword_confirm: e.target.value
            },
            () => {
            });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const categoryObject = {
            sign_up_Name : this.state.sign_up_Name ,
            sign_up_NIC : this.state.sign_up_NIC,
            sign_in_Email1 :this.state.sign_in_Email1,
            sign_upPassword : this.state.sign_upPassword,
            sign_upPassword_confirm : this.state.sign_upPassword_confirm
        };

        this.setState({
            sign_up_Name : '',
            sign_up_NIC : '',
            sign_in_Email1 : '',
            sign_upPassword : '',
            sign_upPassword_confirm : ''
        });

        const response = await fetch("http://localhost:4000/api/signup", {
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
            <Template>
                <div className="container">
                    <div className="d-flex justify-content-center card-back">
                        <div className="card text-center Login_card">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                       href="#nav-home"
                                       role="tab" aria-controls="nav-home" aria-selected="true">Log-In</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                       href="#nav-profile"
                                       role="tab" aria-controls="nav-profile" aria-selected="false">Sign-Up</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active mrgine_make" id="nav-home" role="tabpanel"
                                     aria-labelledby="nav-home-tab">
                                    <div className="d-flex justify-content-center">
                                        <h4>LOG-IN</h4>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label className="d-flex justify-content-start"
                                                   htmlFor="exampleInputEmail1">Email
                                                address</label>
                                            <input type="email" className="form-control border-test"
                                                   id="exampleInputEmail1"
                                                   aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex justify-content-start"
                                                   htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control border-test"
                                                   id="exampleInputPassword"/>
                                        </div>
                                        <a href="/UserProfile" type="submit" className="btn btn-primary mrgine_make" onClick="">LOG IN
                                        </a>
                                    </form>
                                </div>
                                <div className="tab-pane fade mrgine_make" id="nav-profile" role="tabpanel"
                                     aria-labelledby="nav-profile-tab">
                                    <div className="d-flex justify-content-center">
                                        <h4>SIGN-UP</h4>
                                    </div>



















                                    <form onSubmit={this.handleSubmit} action="/Backend/Routes/Fashion.routes.js" method="POST">
                                        <table>
                                            <td>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">User Name</label>
                                                    <input type="text"
                                                           className="form-control border-test"
                                                           id="sign_up_Name"
                                                           onChange={this.handleSign_up_Name}
                                                           value={this.state.sign_up_Name}/>
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">NIC</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_NIC"
                                                           onChange={this.handleSign_up_NIC}
                                                           value={this.state.sign_up_NIC}/>
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputEmail1">Country
                                                    </label>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control border-test"
                                                               aria-label="Text input with dropdown button"/>
                                                        <div className="input-group-prepend">
                                                            <button className="btn dropdown-toggle" data-toggle="dropdown"
                                                                    aria-haspopup="true" aria-expanded="false">
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">Sri Lanka</a>
                                                                <a className="dropdown-item" href="#">India</a>
                                                                <a className="dropdown-item" href="#">Other</a>
                                                                <div role="separator" className="dropDwn"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>

                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputEmail1">Email
                                                        address</label>
                                                    <input type="email" className="form-control border-test"
                                                           id="sign_in_Email1"
                                                           aria-describedby="emailHelp"
                                                           onChange={this.handleSign_in_Email}
                                                           value={this.state.sign_in_Email1}/>
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword"
                                                           onChange={this.handleSign_upPassword}
                                                           value={this.state.sign_upPassword}/>
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Confirm
                                                        Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword_confirm"
                                                           onChange={this.handleSign_upPassword_confirm}
                                                           value={this.state.sign_upPassword_confirm}/>
                                                </div>
                                            </td>
                                        </table>
                                        <button type="submit" className="btn btn-primary mrgine_make">SIGN IN</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        );
    }
}

export default LoginButton;
