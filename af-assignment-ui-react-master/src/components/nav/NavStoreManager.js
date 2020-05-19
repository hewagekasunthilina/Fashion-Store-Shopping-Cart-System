import React from "react";

class NavStoreManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItems: [], selectedItemCount: 0 };

    this.onItemsNavClick = this.onItemsNavClick.bind(this);
    this.onAddItemNavClick = this.onAddItemNavClick.bind(this);
    this.onEditItemsNavClick = this.onEditItemsNavClick.bind(this);
    this.onLogOutNavClick = this.onLogOutNavClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedItemCount: nextProps.selectedItemCount });
  }

  onItemsNavClick() {
    this.props.goToPage('ItemsPage');
  }

  onAddItemNavClick() {
    this.props.goToPage('AddItemPage');
  }

  onEditItemsNavClick() {
    this.props.goToPage('EditItemsPage');
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
                <span className="nav-link" href="#" onClick={this.onAddItemNavClick}>
                  Add Item
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#" onClick={this.onEditItemsNavClick}>
                  Edit Items
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

export default NavStoreManager;
