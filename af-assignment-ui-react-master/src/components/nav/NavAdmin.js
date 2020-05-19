import React from "react";

class NavAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onItemsNavClick = this.onItemsNavClick.bind(this);
    this.onAddManagerUserNavClick = this.onAddManagerUserNavClick.bind(this);
    this.onAddCategoryNavClick = this.onAddCategoryNavClick.bind(this);
    this.onLogOutNavClick = this.onLogOutNavClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedItemCount: nextProps.selectedItemCount });
  }

  onItemsNavClick() {
    this.props.goToPage('ItemsPage');
  }

  onAddManagerUserNavClick() {
    this.props.goToPage('AddManagerUser');
  }

  onAddCategoryNavClick() {
    this.props.goToPage('AddCategoryPage');
  }

  onLogOutNavClick() {
    this.props.logout();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#EBEBEB" }}>
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Shopperrrr!
          </span>
          <span
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <span className="nav-link" href="#" onClick={this.onItemsNavClick}>
                  Items
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#" onClick={this.onAddManagerUserNavClick}>
                  Add Store Manager
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#" onClick={this.onAddCategoryNavClick}>
                  Add Category
                </span>
              </li>
            </ul>
            <span style={{ marginLeft: "2rem" }}>
                <span className="btn btn-sm btn-outline-danger" href="#" onClick={this.onLogOutNavClick}>
                  Log out
                </span>
              </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavAdmin;
