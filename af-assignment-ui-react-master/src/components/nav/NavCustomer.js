import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class NavCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItemCount: 0, user: this.props.user };

    this.onNavItemClick = this.onNavItemClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedItemCount: nextProps.selectedItemCount, user: nextProps.user });
  }

  onNavItemClick(e) {
    let clickedItem = e.target.id;

    switch (clickedItem) {
      case "items": this.props.goToPage("ItemsPage"); break;
      case "wishlist": this.props.goToPage("WishlistPage"); break;
      case "name": this.props.goToPage("Profile"); break;
      case "cart": this.props.goToPage("ShoppingCartPage"); break;
      case "logout": this.props.logout(); break;
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#605D78" }}>
        <div className="container-fluid">
          <span className="navbar-brand" href="#" style={{color: "#FFD9D9", fontSize: "2rem", marginRight: "5%", fontFamily: "Lucida Sans Unicode", fontWeight: "bold", fontStyle: "oblique"}}>
            OFAL Fashions
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
                <span className="nav-link" href="#" id="items" style={{marginRight: "2rem", color: "#ffffff", marginTop: "-.2rem"}} onClick={this.onNavItemClick}>
                  Items
                </span>
              </li>
              <li className="nav-item active">
                <span className="nav-link" href="#" id="wishlist" style={{marginRight: "2rem", color: "#ffffff", marginTop: "-.2rem"}} onClick={this.onNavItemClick}>
                  Wishlist
                </span>
              </li>
            </ul>
            <span id="name" onClick={this.onNavItemClick}>
              Hi {this.state.user.name}!
            </span>
            <span id="cart" onClick={this.onNavItemClick} style={{ marginLeft: "2rem" }}>
              <FontAwesomeIcon id="cart" icon={faShoppingCart} />
              <span id="cart" className="badge badge-pill badge-primary">
                {this.state.selectedItemCount}
              </span>
            </span>
            <span id="logout" style={{ marginLeft: "2rem" }}>
                <span id="logout" className="btn btn-sm btn-outline-danger" href="#" onClick={this.onNavItemClick}>
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
