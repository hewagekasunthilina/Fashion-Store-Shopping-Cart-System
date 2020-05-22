import React from "react";
import axios from "../../api/api";

class AddCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		nameClass: "form-control",
		descriptionClass: "form-control",
		cardClass: "card col-md-4"
	};

    this.onAddCategoryBtnClick = this.onAddCategoryBtnClick.bind(this);
	this.validateAddCategoryForm = this.validateAddCategoryForm.bind(this);

    // Form references.
    this.name = React.createRef();
    this.description = React.createRef();
  }

  onAddCategoryBtnClick() {
	let validForm = this.validateAddCategoryForm();
	  
	if (validForm) {
		let category = { name: this.name.current.value, description: this.description.current.value };
		axios.post('/categories', { category })
		.then(res => {
		  if (res.data.successful) alert(`${category.name} added`);
		  else alert(`Unable to add ${category.name} because ${res.data.body}`);
		})
		.catch(error => alert(`Unable to add ${category.name} because ${error}`) );
	}
  }
	
  validateAddCategoryForm() {
	  let name = this.name.current.value;
	  let description = this.description.current.value;
	  let invalidForm = (name === "" || description === "");
	  
	  this.setState({ nameClass: name === "" ? "form-control is-invalid" : "form-control"});
	  this.setState({ descriptionClass: description === "" ? "form-control is-invalid" : "form-control"});
	  this.setState({ cardClass: invalidForm ? "card col-md-4 border-danger" : "card col-md-4"});
	  
	  return !invalidForm;
  }

  render() {
    return (
      <div className="align-items-center justify-content-center row" style={{ margin: ".5rem", padding: ".5rem"}}>
        <div className={this.state.cardClass} style={{ backgroundColor: "#343A40"}}>
          <div className="card-body">
              <div className="card-header"><h3 style={{textAlign: "center", color:"#fff"}}>Add New Category</h3></div>

              <div>
              <div className="form-group">
                <small style={{color:"#fff"}}>Name</small><br />
                <input ref={this.name} type="text" className={this.state.nameClass} placeholder="Party Wear"/>
              </div>
              <div className="form-group">
                <small style={{color:"#fff"}}>Description</small><br />
                <input ref={this.description} type="text" className={this.state.descriptionClass} placeholder="Dresses and suits for parties"/>
                </div>
            </div>
            <br />
            <button href="#" className="btn btn-primary btn-block " onClick={this.onAddCategoryBtnClick}>Add Category</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCategoryPage;
