import React, {Component} from "react";


import Template from "../Template/Template";

class AddToCart extends Component{
    constructor(props) {
        super(props);
        this.onChangeItemNo = this.onChangeItemNo.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            item_no: '',
            item_qty: ''
        }
    }

    onChangeItemNo(e){
        this.setState({
            item_no: e.target.value
        });
    }

    onChangeQuantity(e){
        this.setState({
            item_qty: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.item_no}, ${this.state.item_qty}`)
        this.setState({
            item_no: '',
            item_qty: ''
        })
    }

    render() {
        return (

            <Template>

                <div style={{marginTop: '50', marginLeft: '40%'}}>

                    <h3>Add To Cart</h3></div>
                <div style={{marginTop: '50', marginLeft: '10%'}}>
                    <h3></h3>

                    <form style={{width: '50%', marginLeft: '10%'}}>
                        <div className="form-group">
                            <label>Item Number: </label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Quantity: </label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add" className="btn btn-primary"/>

                        </div>
                        <div className="form-group">
                            <input type="submit" value="Delete" className="btn btn-danger"/>
                        </div>
                    </form>
                </div>

                <div style={{marginTop: '50', marginLeft: '10%'}}>
                    <form style={{width: '50%', marginLeft: '10%'}}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder={"Click to Add Comment"}/></div>
                        <div className="form-group">
                            <input type="submit" value="Add" className="btn btn-success"/>
                            <a href="/Payment" className="btn btn-primary" style={{marginLeft:'2.5rem'}}>Payment</a>
                        </div>
                    </form>
                </div>


            </Template>
        )
    }
};

export default AddToCart;
