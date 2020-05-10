import React, {Component} from "react";

class Payment extends Component{

    constructor(props) {
        super(props);
        this.state = {
            payment_firstName: '',
            payment_lastName: '',
            payment_conNo: '',
            payment_Address1: '',
            payment_Address2: '',
            payment_City: '',
            payment_CardName: '',
            payment_CardNumber: '',
            payment_CardExp: '',
            payment_CardCvv: '',
        };

        this.handlePaymentFirstNameChange = this.handlePaymentFirstNameChange.bind(this);
        this.handlePaymentLastNameChange = this.handlePaymentLastNameChange.bind(this);
        this.handlePaymentConNoChange = this.handlePaymentConNoChange.bind(this);
        this.handlePaymentAddress1Change = this.handlePaymentAddress1Change.bind(this);
        this.handlePaymentAddress2Change = this.handlePaymentAddress2Change.bind(this);
        this.handlePaymentCityChange = this.handlePaymentCityChange.bind(this);
        this.handlePaymentCardNameChange = this.handlePaymentCardNameChange.bind(this);
        this.handlePaymentCardNumberChange = this.handlePaymentCardNumberChange.bind(this);
        this.handlePaymentCardExpChange = this.handlePaymentCardExpChange.bind(this);
        this.handlePaymentCardCvvChange = this.handlePaymentCardCvvChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePaymentFirstNameChange(e) {
        this.setState({
                payment_firstName: e.target.value
            },
            () => {
            });
    }

    handlePaymentLastNameChange(e) {
        this.setState({
                payment_lastName: e.target.value
            },
            () => {
            });
    }

    handlePaymentConNoChange(e) {
        this.setState({
                payment_conNo: e.target.value
            },
            () => {
            });
    }

    handlePaymentAddress1Change(e) {
        this.setState({
                payment_Address1: e.target.value
            },
            () => {
            });
    }

    handlePaymentAddress2Change(e) {
        this.setState({
                payment_Address2: e.target.value
            },
            () => {
            });
    }

    handlePaymentCityChange(e) {
        this.setState({
                payment_City: e.target.value
            },
            () => {
            });
    }

    handlePaymentCardNameChange(e) {
        this.setState({
                payment_CardName: e.target.value
            },
            () => {
            });
    }

    handlePaymentCardNumberChange(e) {
        this.setState({
                payment_CardNumber: e.target.value
            },
            () => {
            });
    }

    handlePaymentCardExpChange(e) {
        this.setState({
                payment_CardExp: e.target.value
            },
            () => {
            });
    }

    handlePaymentCardCvvChange(e) {
        this.setState({
                payment_CardCvv: e.target.value
            },
            () => {
            });
    }



    handleSubmit = async (e) => {

        e.preventDefault();
        const paymentObject = {
            payment_firstName: this.state. payment_firstName,
            payment_lastName: this.state.payment_lastName,
            payment_conNo: this.state.payment_conNo,
            payment_Address1: this.state.payment_Address1,
            payment_Address2: this.state.payment_Address2 ,
            payment_City: this.state.payment_City,
            payment_CardName: this.state.payment_CardName,
            payment_CardNumber: this.state.payment_CardNumber,
            payment_CardExp: this.state.payment_CardExp,
            payment_CardCvv: this.state.payment_CardCvv,
        };

        const response = await fetch("http://localhost:4000/api/payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paymentObject)
        });

        const responseData = await response.json();
        console.log(responseData);
        console.log(paymentObject);

    };

    render() {
        return(
            <div className="backdrop" style={{backgroundColor:'grey'}}>
                <form onSubmit={this.handleSubmit} action="/Backend/Routes/Fashion.routes.js" method="POST" className="needs-validation" noValidate style={{width:'50rem', marginLeft:'15rem', marginTop:'8rem'}}>
                    <div className="form-row" style={{marginLeft:'0.5rem'}}>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip01">First name</label>
                            <input type="text"
                                   className="form-control"
                                   id="validationTooltip01"
                                   placeholder=""
                            onChange={this.handlePaymentFirstNameChange}
                            value={this.state.payment_firstName}/>
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip02">Last name</label>
                            <input type="text" className="form-control" id="validationTooltip02" placeholder=""
                                   onChange={this.handlePaymentLastNameChange}
                                   value={this.state.payment_lastName}/>
                            <div className="valid-tooltip">
                                Looks good!

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationTooltip03">Contact Number</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder=""
                               onChange={this.handlePaymentConNoChange}
                               value={this.state.payment_conNo}
                              />
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>

                    <div className="form-row" style={{marginLeft:'0.5rem'}}>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationTooltip03">Address</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder=""
                               onChange={this.handlePaymentAddress1Change}
                               value={this.state.payment_Address1}
                               />
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip03">Address 2</label>
                            <input type="text" className="form-control" id="validationTooltip03" placeholder=""
                                   onChange={this.handlePaymentAddress2Change}
                                   value={this.state.payment_Address2}
                                   />
                            <div className="invalid-tooltip">
                                Please provide a valid city.
                            </div>
                        </div>
                        </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationTooltip03">City</label>
                        <input type="text" className="form-control" id="validationTooltip03" placeholder=""
                               onChange={this.handlePaymentCityChange}
                               value={this.state.payment_City}
                               />
                        <div className="invalid-tooltip">
                            Please provide a valid city.
                        </div>
                    </div>


                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Credit Card
                            </label>
                        </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                               value="option1" checked/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Debit Card
                        </label>
                    </div>
                    <div className="form-row" style={{marginLeft:'0.5rem'}}>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip01">Name On Card</label>
                            <input type="text" className="form-control" id="validationTooltip01"
                                   placeholder=""
                                   onChange={this.handlePaymentCardNameChange}
                                   value={this.state.payment_CardName}/>
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip02">Card Number</label>
                            <input type="text" className="form-control" id="validationTooltip02" placeholder=""
                                   onChange={this.handlePaymentCardNumberChange}
                                   value={this.state.payment_CardNumber}
                                    />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        </div>
                    <div className="form-row" style={{marginLeft:'0.5rem'}}>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip01">Expiration</label>
                            <input type="text" className="form-control" id="validationTooltip01"
                                   placeholder=""
                                   onChange={this.handlePaymentCardExpChange}
                                   value={this.state.payment_CardExp}/>
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationTooltip02">CVV</label>
                            <input type="text" className="form-control" id="validationTooltip02" placeholder=""
                                   onChange={this.handlePaymentCardCvvChange}
                                   value={this.state.payment_CardCvv}
                                   />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>




                    </div>
                    <div className="form-group">
                        <input type="submit" value="Continue To Checkout" className="btn btn-success" style={{marginLeft:'10rem', width:'15rem'}}/>
                        <a className="btn btn-primary btn-sm" href="/AddToCart" role="button" style={{marginLeft:'6rem'}}>Back</a>
                    </div>

                </form>
            </div>
        )
    }
}

export default Payment;
