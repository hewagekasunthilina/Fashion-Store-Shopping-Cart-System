import React from "react";

class NavNotLogged extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItems: [], selectedItemCount: 0 };

    this.onItemsNavClick = this.onItemsNavClick.bind(this);
    this.onLoginRegisterNavClick = this.onLoginRegisterNavClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedItemCount: nextProps.selectedItemCount });
  }

  onItemsNavClick() {
    this.props.goToPage('ItemsPage');
  }

  onLoginRegisterNavClick() {
    this.props.goToPage('LoginRegisterCustomer');
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
                <span className="nav-link" href="#" style={{marginRight: "2rem", color: "#ffffff", marginTop: "-.2rem"}} onClick={this.onItemsNavClick}>
                  Items
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#" style={{marginRight: "2rem", color: "#ffffff", marginTop: "-.2rem"}} onClick={this.onLoginRegisterNavClick}>
                  Login / Register
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavNotLogged;
