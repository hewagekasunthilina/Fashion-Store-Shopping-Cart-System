import React from "react";

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            password: this.props.user.password,
            name: this.props.user.name,
            role: this.props.user.role,
            deleteConfirmation: false,
            roles: ["customer", "admin", "manager"]
        };

        this.onUpdateBtnClick = this.onUpdateBtnClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);

        // Form references.
        this.name = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.role = React.createRef();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({item: nextProps.item});
    }

    // tell parent to add this item to the cart.
    onUpdateBtnClick() {
        let updatedUser = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            role: this.state.role,
        }

        this.props.updateUser(updatedUser);
    }

    onDeleteBtnClick() {
        let userToDelete = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };

        if (this.state.deleteConfirmation) this.props.deleteUser(userToDelete);
        else alert(`Check Deletion Confirmation checkbox for ${userToDelete.email}`);
    }

    onTextChange(e) {
        let field = e.target.name;
        let newValue = e.target.value;

        switch (field) {
            case "email":
                this.setState({email: newValue});
                break;
            case "password":
                this.setState({password: newValue});
                break;
            case "name":
                this.setState({name: newValue});
                break;
        }
    }

    onSelectChange(e) {
        let newRole = e.target.value;
        this.setState({role: newRole});
    }

    onCheckBoxChange(e) {
        this.setState({deleteConfirmation: e.target.checked});
    }

    render() {
        return (
            <div
                className="align-items-center justify-content-center row col-md-12"
                style={{margin: ".5rem", padding: ".5rem"}}
            >
                <div className="card">
                    <div className="card-body">
                        <div class="form-inline">
                            <div class="form-group" style={{"margin-right": "1rem"}}>
                                <label style={{"margin-right": ".5rem"}}>Email</label>
                                <input
                                    ref={this.email}
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="john@appleseed.com"
                                    value={this.state.email}
                                    onChange={this.onTextChange}
                                    disabled
                                />
                            </div>
                            <div class="form-group" style={{"margin-right": "1rem"}}>
                                <label style={{"margin-right": ".5rem"}}>Name</label>
                                <input
                                    ref={this.name}
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="John Appleseed"
                                    value={this.state.name}
                                    onChange={this.onTextChange}
                                />
                            </div>
                            <div class="form-group" style={{"margin-right": "1rem"}}>
                                <label style={{"margin-right": ".5rem"}}>Password</label>
                                <input
                                    ref={this.password}
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="shush!"
                                    value={this.state.password}
                                    onChange={this.onTextChange}
                                />
                            </div>
                            <div class="form-group" style={{"margin-right": "1rem"}}>
                                <label style={{"margin-right": ".5rem"}}>Role</label>
                                <select ref={this.role} value={this.state.role}
                                        disabled={this.state.role === "customer"} onChange={this.onSelectChange}
                                        className="form-control">{this.state.roles.map((role, index) => {
                                    return (<option>{role}</option>)
                                })} </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-group  card-body d-flex justify-content-end" style={{"margin-right": "1rem"}}>
                            <button
                                href="#"
                                className="btn btn-success btn-sm"
                                onClick={this.onUpdateBtnClick}
                            >
                                Update User
                            </button>
                            <button
                                href="#"
                                className="btn btn-danger btn-sm"
                                onClick={this.onDeleteBtnClick}
                                style={{marginLeft: "1rem"}}
                            >
                                Delete User
                            </button>
                        </div>

                        <div class="form-check card-body align-items-right justify-content-right" style={{float: "right"}}>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
                                   onChange={this.onCheckBoxChange}/>
                            <small class="form-check-label" for="defaultCheck1">
                                Confirm Deletion
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;
