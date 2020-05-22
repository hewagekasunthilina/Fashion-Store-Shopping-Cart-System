import React from "react";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: this.props.totalPrice, warnings: [], cardClasses: "card" };

    this.onPayBtnClick = this.onPayBtnClick.bind(this);

    // Form references.
    this.name = React.createRef();
    this.cardNumber = React.createRef();
    this.month = React.createRef();
    this.year = React.createRef();
    this.address = React.createRef();
    this.cardTypeVisa = React.createRef();
    this.cardTypeMaster = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ totalPrice: nextProps.totalPrice });
  }

  onPayBtnClick() {
    let paymentInput = {
      name: this.name.current.value,
      cardNumber: this.cardNumber.current.value,
      month: this.month.current.value,
      year: this.year.current.value,
      address: this.address.current.value,
      selectedCard: (this.cardTypeVisa.current.checked ? "Visa" : "Master"),
      totalPrice: this.state.totalPrice
    };

    // Check for empty fields
    let warnings = []
    let emptyFields = false;
    Object.keys(paymentInput).forEach(key => {
      let value = paymentInput[key];
      if (!value) {
        warnings.push(`${key} can not be empty`);
        emptyFields = true;
        this.setState({ cardClasses: "card border-danger"});
      }
    })

    this.setState({ warnings: warnings });
    if (!emptyFields) {
      this.setState({ cardClasses: "card"});
      this.props.makePayment(paymentInput);
    }
  }

  render() {
    return (
      <div className="align-items-center" style={{ margin: ".5rem", padding: ".5rem",backgroundColor: "#343A40"}}>
        <div className={this.state.cardClasses}>
          <div className="card-body">
            <h5 className="card-title">Payment</h5>
            <div>
              <div className="form-group">
                <small>Product(s) Total</small><br />
                <label>{this.state.totalPrice}</label>
              </div>
              <div className="form-group">
                <small>Name on Card</small><br />
                <input ref={this.name} type="text" className="form-control" placeholder="Hashini Silva"/>
              </div>
              <div className="form-group">
                <small>Card Number</small><br />
                <input ref={this.cardNumber} type="text" className="form-control" placeholder="42267896453"/>
              </div>
              <div className="form-group">
                <small>Expiry Date</small><br />
                <div className="row">
                  <div className="col">
                    <small>Month</small><br />
                    <select ref={this.month} className="form-control">{ Array.from(Array(12).keys()).map((elem, index) => { return(<option>{elem+1}</option>) })} </select>
                  </div>
                  <div className="col">
                    <small>Year</small><br />
                    <select ref={this.year} className="form-control">{ [2020, 2021, 2022, 2023].map((year, index) => { return(<option>{year}</option>) })} </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <small>Address</small><br />
                <input ref={this.address} type="text" className="form-control" rows="3" placeholder="02, Park Street, Colombo 08" />
              </div>
              <div className="form-group">
                <small>Card Type</small><br />
                <div className="form-check form-check-inline">
                  <input ref={this.cardTypeVisa} className="form-check-input" type="radio" name="cardType" id="visa" value="Visa"/>
                  <label className="form-check-label" for="visa">Visa</label>
                </div>
                <div className="form-check form-check-inline">
                  <input ref={this.cardTypeMaster} className="form-check-input" type="radio" name="cardType" id="master" value="Master"/>
                  <label className="form-check-label" for="master">Master</label>
                </div>
              </div>
            </div>
            <ul>
              {this.state.warnings.map((warning, index) => {
                return(<li><small className="text-danger">{warning}</small></li>)
              })}
            </ul>
            <br />
            <button href="#" className="btn btn-outline-success btn-block" onClick={this.onPayBtnClick}>
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
