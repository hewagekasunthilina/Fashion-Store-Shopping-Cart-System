import React, {Component} from "react";
import Template from "../Template/Template";
import "./AddStoreManager.css"

class AddStoreManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign_up_Name: '',
            sign_up_NIC: '',
            sign_in_Email1: '',
            sign_upPassword: '',
            sign_upPassword_confirm: '',
            sign_up_contact_number: ''
        };

        this.handleSign_up_Name = this.handleSign_up_Name.bind(this);
        this.handleSign_up_NIC = this.handleSign_up_NIC.bind(this);
        this.handleSign_in_Email = this.handleSign_in_Email.bind(this);
        this.handleSign_upPassword = this.handleSign_upPassword.bind(this);
        this.handleSign_upPassword_confirm = this.handleSign_upPassword_confirm.bind(this);
        this.handleSign_up_contact_number = this.handleSign_up_contact_number.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSign_up_Name(e){
        this.setState({
                sign_up_Name: e.target.value
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
    handleSign_up_contact_number(e){
        this.setState({
                sign_up_contact_number: e.target.value
            },
            () => {
            });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const userDetailsObj = {
            sign_up_Name : this.state.sign_up_Name ,
            sign_up_NIC : this.state.sign_up_NIC,
            sign_in_Email1 :this.state.sign_in_Email1,
            sign_upPassword : this.state.sign_upPassword,
            sign_upPassword_confirm : this.state.sign_upPassword_confirm,
            sign_up_contact_number: this.state.sign_up_contact_number
        };

        this.setState({
            sign_up_Name : '',
            sign_up_NIC : '',
            sign_in_Email1 : '',
            sign_upPassword : '',
            sign_upPassword_confirm : '',
            sign_up_contact_number : ''
        });

        const response = await fetch("http://localhost:4000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetailsObj)
        });

        const responseData = await response.json();
        console.log(responseData);
        console.log(userDetailsObj);
    };

    render() {
        return (
            <Template>
                <div className="container">
                    <div className="d-flex justify-content-center card-back">
                        <div className="card text-center Login_card" id = "addRole">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                       href="#nav-home"
                                       role="tab" aria-controls="nav-home" aria-selected="true">Admin</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                       href="#nav-profile"
                                       role="tab" aria-controls="nav-profile" aria-selected="false">Store
                                        Manager</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active mrgine_make" id="nav-home" role="tabpanel"
                                     aria-labelledby="nav-home-tab">
                                    <div className="d-flex justify-content-center">
                                        <h4>New Admin</h4>
                                    </div>
                                    <form>

                                        <table>
                                            <td style={{paddingLeft: '6rem', paddingTop: '2rem'}}>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Full Name</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_Name"
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">NIC</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_NIC"
                                                    />
                                                </div>
                                                <div>
                                                    <input type="file" className="" style={{marginTop:'3rem', marginLeft:'1rem'}}/>
                                                </div>
                                            </td>
                                            <td style={{paddingLeft: '11rem', paddingTop: '2rem'}}>

                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputEmail1">Email
                                                        address</label>
                                                    <input type="email" className="form-control border-test"
                                                           id="sign_in_Email1"
                                                           aria-describedby="emailHelp"
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword"
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Confirm
                                                        Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword_confirm"
                                                    />
                                                </div>

                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Contact Number</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword_confirm"
                                                    />
                                                </div>

                                                <div className="form-group mrgine_make hidden">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">User Type</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="user_type"
                                                    />
                                                </div>

                                            </td>
                                        </table>
                                        <button type="submit" className="btn btn-primary mrgine_make">SAVE & PUBLISH</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade mrgine_make" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="d-flex justify-content-center">
                                        <h4>New Store Manager</h4>
                                    </div>

                                    {/*Sign Up Form*/}


                                    <form>
                                        <table>
                                            <td style={{paddingLeft: '6rem', paddingTop: '2rem'}}>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">User Name</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_Name"
/>
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">NIC</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_NIC"
                                                         />
                                                </div>
                                                <div>
                                                    <input type="file" className="" style={{marginTop:'3rem', marginLeft:'1rem'}}/>
                                                </div>
                                            </td>
                                            <td style={{paddingLeft: '11rem', paddingTop: '2rem'}}>

                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputEmail1">Email
                                                        address</label>
                                                    <input type="email" className="form-control border-test"
                                                           id="sign_in_Email1"
                                                           aria-describedby="emailHelp"
                                                          />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword"
                                                           />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Confirm
                                                        Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword_confirm"
                                                          />
                                                </div>

                                                <div className="form-group mrgine_make hidden">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">User Type</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="user_type"
                                                     />
                                                </div>

                                            </td>
                                        </table>
                                        <button type="submit" className="btn btn-primary mrgine_make">SAVE & PUBLISH</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }
}

export default AddStoreManager;
