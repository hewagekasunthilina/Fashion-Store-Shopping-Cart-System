import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class NavCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItems: [], selectedItemCount: 0, user: this.props.user };

    this.onShoppingCartClick = this.onShoppingCartClick.bind(this);
    this.onItemsNavClick = this.onItemsNavClick.bind(this);
    this.onLogOutNavClick = this.onLogOutNavClick.bind(this);
    this.onWishlistNavClick = this.onWishlistNavClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedItemCount: nextProps.selectedItemCount, user: nextProps.user });
  }

  onShoppingCartClick() {
    this.props.goToPage('ShoppingCartPage');
  }

  onItemsNavClick() {
    this.props.goToPage('ItemsPage');
  }

  onWishlistNavClick() {
    this.props.goToPage('WishlistPage');
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
              <li className="nav-item active">
                <span className="nav-link" href="#" onClick={this.onWishlistNavClick}>
                  Wishlist
                </span>
              </li>
            </ul>
            <span>
              Hi {this.state.user.name}!
            </span>
            <span onClick={this.onShoppingCartClick} style={{ marginLeft: "2rem" }}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="badge badge-pill badge-primary">
                {this.state.selectedItemCount}
              </span>
            </span>
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

export default NavCustomer;
