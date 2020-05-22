import React from "react";

class EditCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.category.name,
      description: this.props.category.description,
      deleteConfirmation: false
    };

    this.onUpdateBtnClick = this.onUpdateBtnClick.bind(this);
    this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.category.name, description: nextProps.category.description });
  }

  // tell parent to add this item to the cart.
  onUpdateBtnClick() {
    let name = this.state.name;
    let description = this.state.description;
    let updatedCategory = { _id: name, name: name, description: description };
    
    this.props.updateCategory(updatedCategory);
  }

  onDeleteBtnClick() {
    let name = this.state.name;
    let description = this.state.description;
    let categoryToDelete = { _id: name, name: name, description: description };

    if (this.state.deleteConfirmation) this.props.deleteCategory(categoryToDelete);
    else alert(`Check Deletion Confirmation checkbox for ${categoryToDelete.name}`);
  }

  onCheckBoxChange(e) {
    this.setState({ deleteConfirmation: e.target.checked });
  }

  onTextChange(e) {
    let changedFiled = e.target.id;
    let newValue = e.target.value;
    
    switch(changedFiled) {
      case "name": this.setState({ name: newValue });
      case "description": this.setState({ description: newValue });
    }
  }
  
  render() {
    return (
      <div
        className="align-items-center justify-content-center row col-md-12"
        style={{ margin: ".5rem", padding: ".5rem" }}
      >
        <div className="card">
          <div className="card-body">
            <div class="form-inline">
              <div class="form-group" style={{ "margin-right": "1rem" }}>
                <label style={{ "margin-right": ".5rem" }}>Name</label>
                <input
                  ref={this.name}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Shoes"
                  value={this.state.name}
                  onChange={this.onTextChange}
                />
              </div>
              <div class="form-group" style={{ "margin-right": "1rem" }}>
                <label style={{ "margin-right": ".5rem" }}>Description</label>
                <input
                  ref={this.description}
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Mens shoes"
                  value={this.state.description}
                  onChange={this.onTextChange}
                />
              </div>
              <div class="form-group" style={{ "margin-right": "1rem" }}>
                <button
                  className="btn btn-success btn-sm"
                  onClick={this.onUpdateBtnClick}
                >
                  Update Item
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.onDeleteBtnClick}
                  style={{ marginLeft: "1rem" }}
                >
                  Delete Item
                </button>
              </div>
            </div>
          </div>
          <div className="card-body align-items-right justify-content-right">
            <div class="form-check" style={{ float: "right" }}>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={this.onCheckBoxChange}/>
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

export default EditCategory;
