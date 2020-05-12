import React, {Component} from 'react';
import Template from "../Template/Template";
import "./Login.css";


class LoginButton extends Component {
    //
    // constructor() {
    //     super();
    //     this.state = {
    //         sign_up_Name: '',
    //         sign_up_NIC:'',
    //         sign_up_Mobile:'',
    //         sign_up_Address: '',
    //         sign_in_Email1:'',
    //         sign_upPassword:'',
    //         user_type: 'user'
    //         }
    //
    //         this.onChange = this.onChange.bind(this);
    //         this.onSubmit = this.onSubmit.bind(this);
    //         this.onChangeReg = this.onChangeReg.bind(this);
    //         this.onSubmitReg= this.onSubmitReg.bind(this);
    //
    // }
    //
    // onChange(e){
    //     this.setState({[e.target.name] : e.target.value})
    // }
    // onSubmit(e)
    // {
    //     e.preventDefault()
    //     const user = {
    //         sign_in_Email1: this.state.sign_in_Email1,
    //         sign_upPassword: this.state.sign_upPassword,
    //     };

    //     login(user).then(res => {
    //         if(res){
    //             this.props.history.push(`/`)
    //         }
    //     })
    // }

    // onChangeReg(e){
    //     this.setState({[e.target.name] : e.target.value})
    // }
    //
    // onSubmitReg(e)
    // {
    //     e.preventDefault()
    //     const user_reg = {
    //         sign_up_Name: this.state.sign_up_Name,
    //         sign_up_NIC:this.state.sign_up_NIC,
    //         sign_up_Mobile:this.state.sign_up_Mobile,
    //         sign_up_Address: this.state.sign_up_Address,
    //         sign_in_Email1:this.state.sign_in_Email1,
    //         sign_upPassword:this.state.sign_upPassword,
    //         user_type: this.state.user_type
    //     };

    //     register(user_reg).then(res => {
    //         console.log(user_reg);
    //
    //         if(res){
    //             this.props.history.push(`/login`)
    //         }
    //     })
    // }


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
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label className="d-flex justify-content-start"
                                                   htmlFor="exampleInputEmail1">Email
                                                address</label>
                                            <input type="email" className="form-control border-test"
                                                   id="exampleInputEmail1"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Enter Email Address"
                                                   // value={this.state.sign_in_Email1}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="d-flex justify-content-start"
                                                   htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control border-test"
                                                   id="exampleInputPassword"
                                                   placeholder="Enter Password"
                                                   //value={this.state.sign_upPassword}
                                                   onChange={this.onChange}
                                            />
                                        </div>
                                        <a  type="submit" className="btn btn-primary mrgine_make"
                                           onClick="">LOG IN
                                        </a>
                                    </form>
                                </div>
                                <div className="tab-pane fade mrgine_make" id="nav-profile" role="tabpanel"
                                     aria-labelledby="nav-profile-tab">
                                    <div className="d-flex justify-content-center">
                                        <h4>SIGN-UP</h4>
                                    </div>


                                    <form onSubmit={this.onSubmitReg} action="/Backend/Routes/Fashion.routes.js"
                                          method="POST">
                                        <div>
                                            <input type="file" className=""
                                            id="sign_up_img"
                                            onChange={this.handleSign_up_img}
                                            //value={this.state.sign_up_img}
                                            />
                                        </div>
                                        <table>
                                            <td>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">User Name</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_Name"

                                                           onChange={this.onChangeReg}
                                                           //value={this.state.sign_up_Name}
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">NIC</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_NIC"
                                                           onChange={this.onChangeReg}
                                                           //value={this.state.sign_up_NIC}
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Mobile</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_Mobile"
                                                           onChange={this.onChangeReg}
                                                           //value={this.state.sign_up_Mobile}
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Address</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="sign_up_Address"
                                                           onChange={this.onChangeReg}
                                                           //value={this.state.sign_up_Address}
                                                    />
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
                                                           onChange={this.onChangeReg}
                                                           //value={this.state.sign_in_Email1}
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword"
                                                           onChange={this.onChangeReg}
                                                           //value={this.state.sign_upPassword}
                                                    />
                                                </div>
                                                <div className="form-group mrgine_make">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">Confirm
                                                        Password</label>
                                                    <input type="password" className="form-control border-test"
                                                           id="sign_upPassword_confirm"/>
                                                </div>

                                                <div className="form-group mrgine_make hidden">
                                                    <label className="d-flex justify-content-start"
                                                           htmlFor="exampleInputPassword1">User Type</label>
                                                    <input type="text" className="form-control border-test"
                                                           id="user_type"
                                                           onChange={this.onChangeReg}
                                                           //value={this.state.user_type}
                                                    />
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
