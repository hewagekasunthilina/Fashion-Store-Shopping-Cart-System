import React from "react";
import axios from "../../api/api";

class AddManagerUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
		roles: ['admin', 'manager'], 
		cardClass: "card col-md-4",
		nameClass: "form-control",
		emailClass: "form-control",
		passwordClass: "form-control"
	};

    this.onAddUserBtnClick = this.onAddUserBtnClick.bind(this);
	this.validateAddManagerForm = this.validateAddManagerForm.bind(this);

    // Form references.
    this.name = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.role = React.createRef();
  }

  onAddUserBtnClick() {
	let validForm = this.validateAddManagerForm();
	  
	if (validForm) {
		let user = { name: this.name.current.value, email: this.email.current.value, password: this.password.current.value, role: this.role.current.value };
		axios.post('/users/managers', { user })
		.then(res => {
		  if (res.data.successful) {
			  let roleToShow = user.role === "admin" ? "Administrator" : "Store Manager";
			  alert(`${roleToShow}: ${user.name} was added successfully`);
		  }
		  else alert(`Unable to add ${user.name} because ${res.data.body}`);
		})
		.catch(error => alert(`Unable to add ${user.name} because ${error}`));
	}
  }
	
  validateAddManagerForm() {
	  let name = this.name.current.value;
	  let email = this.email.current.value;
	  let password = this.password.current.value;
	  let formInvalid = (name === "" || email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email)) || password === "");
	  
	  this.setState({ nameClass: name === "" ? "is-invalid form-control" : "form-control" });
	  this.setState({ emailClass: (email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email))) ? "is-invalid form-control" : "form-control" });
	  this.setState({ passwordClass: password === "" ? "is-invalid form-control" : "form-control" });
	  this.setState({ cardClass: formInvalid ? "card col-md-4 border-danger" : "card col-md-4" });
	  
	  return !formInvalid;
	  
  }

  render() {
    return (
      <div className="align-items-center justify-content-center row" style={{ margin: ".5rem", padding: ".5rem"}}>
        <div className={this.state.cardClass}>
          <div className="card-body">
            <h5 className="card-title">Add Store Manager</h5>
            <div>
              <div className="form-group">
                <small>Name</small><br />
                <input ref={this.name} type="text" className={this.state.nameClass} placeholder="Gayan Perera"/>
              </div>
              <div className="form-group">
                <small>Email</small><br />
                <input ref={this.email} type="text" className={this.state.emailClass} placeholder="gaya.perera@gmail.com"/>
                </div>
              <div className="form-group">
                <small>Password</small><br />
                <input ref={this.password} type="password" className={this.state.passwordClass} placeholder="shush!"/>
              </div>
              <div className="form-group">
                <small>User Type</small><br />
                  <select ref={this.role} className="form-control">{ this.state.roles.map((role, index) => { return(<option>{role}</option>) })} </select>
              </div>
            </div>
            <br />
            <button href="#" className="btn btn-outline-primary btn-block" onClick={this.onAddUserBtnClick}>Add User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddManagerUser;
