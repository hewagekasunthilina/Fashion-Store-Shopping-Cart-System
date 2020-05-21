import React from "react";
import axios from "../../api/api";

class LoginRegisterCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
		loginCardClass: "card col-md-3", 
		regCardClass: "card col-md-3",
		regNameInputClass: "form-control",
		regEmailInputClass: "form-control",
		regPasswordInputClass: "form-control",
		loginEmailInputClass: "form-control",
		loginPasswordInputClass: "form-control"
	};

    this.onRegBtnClick = this.onRegBtnClick.bind(this);
    this.onLoginBtnClick = this.onLoginBtnClick.bind(this);
	this.validateLoginForm = this.validateLoginForm.bind(this);
	this.validateRegForm = this.validateRegForm.bind(this);

    // Form references.
    this.regName = React.createRef();
    this.regEmail = React.createRef();
    this.regPassword = React.createRef();
    this.loginEmail = React.createRef();
    this.loginPassword = React.createRef();
  }

  onRegBtnClick() {
    let user = { name: this.regName.current.value, email: this.regEmail.current.value, password: this.regPassword.current.value, role: "customer" };
	let validForm = this.validateRegForm();
	
	if (validForm) {
		this.setState({ regCardClass: "card col-md-3"});
		axios.post('/users/customers', { user })
		.then(res => {
		  if (res.data.successful === true) alert('Registration Successful. Please login')
		  else alert('Registration Unsuccessfull due to ' + res.data.body);
		})
		.catch(error => console.log(error));	
	}

  }

  onLoginBtnClick() {
    let credentials = { email: this.loginEmail.current.value, password: this.loginPassword.current.value };
	let validForm = this.validateLoginForm();
	
	if (validForm) {
		this.setState({ loginCardClass: "card col-md-3"});
		  axios.post('/users/login', { credentials })
			.then(res => {
			  if (res.data.successful === true) {
				  alert('Login Successful');
				  this.props.onSuccessfulLogin(res.data.user);
			  } else {
				  console.log(res.data);
				  alert('Invalid Credentials, please check your email and paassword');
			  }
			})
			.catch(error => { 
				console.log(error); 
				alert('Unknown server error occured');
			});
	}
  }
	
  validateLoginForm() {
	  let email = this.loginEmail.current.value;
	  let password = this.loginPassword.current.value;
	  let formInvalid = (email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email)) || password === "");
						 
	  this.setState({ loginEmailInputClass: email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email)) ? "is-invalid form-control" : "form-control" })
	  this.setState({ loginPasswordInputClass: password === "" ? "is-invalid form-control" : "form-control" })
	  this.setState({ loginCardClass: formInvalid ? "card col-md-3 border-danger" : "card col-md-3" })
	  
	  return !formInvalid;
  }
	
  validateRegForm() {
	  let name = this.regName.current.value;
	  let email = this.regEmail.current.value;
	  let password = this.regPassword.current.value;
	  let formInvalid = (name === "" || email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email)) || password === "");
						 
	  this.setState({ regNameInputClass: name === "" ? "is-invalid form-control" : "form-control" })
	  this.setState({ regEmailInputClass: email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email)) ? "is-invalid form-control" : "form-control" })
	  this.setState({ regPasswordInputClass: password === "" ? "is-invalid form-control" : "form-control" })
	  this.setState({ regCardClass: formInvalid ? "card col-md-3 border-danger" : "card col-md-3" })
	  
	  return !formInvalid;
  }

  render() {
    return (
      <div className=" justify-content-center row col-md-12" style={{ marginTop: "5rem" }}>
        <div className={this.state.regCardClass} style={{ margin: ".5rem", padding: ".5rem"}}>
            <div className="card-body">
              <h5 className="card-title">Register</h5>
              <div>
                <div className="form-group">
                  <small>Name</small><br />
                  <input ref={this.regName} className={this.state.regNameInputClass} type="text" placeholder="Gayan Perera" />
                </div>
                <div className="form-group">
                  <small>Email</small><br />
                  <input ref={this.regEmail} className={this.state.regEmailInputClass} type="text" placeholder="gaya.perera@gmail.com"/>
                  </div>
                <div className="form-group">
                  <small>Password</small><br />
                  <input ref={this.regPassword} className={this.state.regPasswordInputClass} type="password" placeholder="shush!"/>
                </div>
              </div>
              <br />
              <button href="#" className="btn btn-secondary btn-block align-self-end" onClick={this.onRegBtnClick}>Register</button>
            </div>
          </div>

          <div className="col-md-1" style={{ margin: ".5rem", padding: ".5rem"}}></div>

          <div className={this.state.loginCardClass} style={{ margin: ".5rem", padding: ".5rem"}}>
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <div>
                <div className="form-group">
                  <small>Email</small><br />
                  <input ref={this.loginEmail} className={this.state.loginEmailInputClass} type="text" placeholder="gaya.perera@gmail.com"/>
                  </div>
                <div className="form-group">
                  <small>Password</small><br />
                  <input ref={this.loginPassword} className={this.state.loginPasswordInputClass} type="password" placeholder="shush!"/>
                </div>
              </div>
              <br />
              <button href="#" className="btn btn-primary btn-block" onClick={this.onLoginBtnClick}>Login</button>
            </div>
          </div>
       </div>
    );
  }
}

export default LoginRegisterCustomer;
