import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cartItem: this.props.cartItem};

        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({cartItem: nextProps.cartItem});
    }

    onRemoveItem() {
        let item = this.state.cartItem;

        // remove additional fields that came from grouping.
        delete item.totalItemCount;
        delete item.totalPrice;

        this.props.removeItem(item);
    }

    onAddItem() {
        let item = this.state.cartItem;

        // remove additional fields that came from grouping.
        delete item.totalItemCount;
        delete item.totalPrice;

        this.props.addItem(item);
    }

    render() {
        return (
            <div
                className="align-items-center"
                style={{margin: ".5rem", padding: ".5rem"}}
            >
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">{this.state.cartItem.title}</h6>
                        <small className="card-text">
                            {this.state.cartItem.discountedPrice} x {" "}
                            <span class="badge badge-secondary">
                {this.state.cartItem.totalItemCount}
              </span>{" "}
                            = {this.state.cartItem.totalPrice}
                        </small>
                        <div
                            class="btn-group btn-group-toggle btn-group-sm float-right"
                            data-toggle="buttons"
                        >
                            <label class="btn btn-outline-danger">
                                <FontAwesomeIcon
                                    icon={faMinusCircle}
                                    onClick={this.onRemoveItem}
                                />
                            </label>
                            <label class="btn btn-outline-success">
                                <FontAwesomeIcon icon={faPlusCircle} onClick={this.onAddItem}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;
