import React from "react";
import axios from "../../api/api";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            password: this.props.user.password,
            name: this.props.user.name,
            role: this.props.user.role,
            deleteConfirmation: false,
            roles: ["customer", "admin", "manager"],
            cardClass: "card col-md-3",
            nameClass: "form-control",
            passwordClass: "form-control"
        };

        this.onSaveBtnClick = this.onUpdateBtnClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

        // Form references.
        this.name = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({item: nextProps.item});
    }

    onUpdateBtnClick() {
        let updatedUser = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            role: this.state.role,
        }

        this.props.updateProfile(updatedUser);
    }

    onTextChange(e) {
        let field = e.target.name;
        let newValue = e.target.value;

        switch (field) {
            case "password":
                this.setState({password: newValue});
                break;
            case "name":
                this.setState({name: newValue});
                break;
        }
    }

    render() {
        return (
            <div className="align-items-center justify-content-center row" style={{margin: ".5rem", padding: ".5rem"}}>
                <div className={this.state.cardClass} style={{backgroundColor: "#343A40", color: "#fff"}}>
                    <div className="card-body">
                        <h5 className="card-title">Update Profile</h5>
                        <div>
                            <div className="form-group">
                                <small>Name</small><br/>
                                <input ref={this.name} name="name" type="text" className={this.state.nameClass}
                                       value={this.state.name} onChange={this.onTextChange} placeholder="Gayan Perera"/>
                            </div>
                            <div className="form-group">
                                <small>Email</small><br/>
                                <input ref={this.email} name="email" type="text" className="form-control"
                                       value={this.state.email} placeholder="gaya.perera@gmail.com" disabled/>
                            </div>
                            <div className="form-group">
                                <small>Password</small><br/>
                                <input ref={this.password} name="password" type="password"
                                       className={this.state.passwordClass} value={this.state.password}
                                       onChange={this.onTextChange} placeholder="shush!"/>
                            </div>
                        </div>
                        <br/>
                        <button href="#" className="btn btn-outline-success btn-block"
                                onClick={this.onSaveBtnClick}>Edit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;
