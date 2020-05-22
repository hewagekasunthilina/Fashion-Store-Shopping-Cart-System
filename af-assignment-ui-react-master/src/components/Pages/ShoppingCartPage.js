import React from "react";
import CartItem from "../Cart/CartItem";
import Summary from "../Cart/Summary";
import axios from "../../api/api";

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: this.props.selectedItems,
      groupedSelectedItems: [],
      totalPrice: this.props.totalPrice,
    };

    this.onSelectedItemsUpdated = this.onSelectedItemsUpdated.bind(this);
    this.groupShoppingCartItems = this.groupShoppingCartItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.makePayment = this.makePayment.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedItems: nextProps.selectedItems,
      totalPrice: nextProps.totalPrice,
    });

    //let groupedSelectedItems = this.groupShoppingCartItems();
    //this.setState({ groupedSelectedItems: groupedSelectedItems });
    this.getTotal();
  }

  componentDidMount() {
    //let groupedSelectedItems = this.groupShoppingCartItems();
    //this.setState({ groupedSelectedItems: groupedSelectedItems });
    this.getTotal();
  }

  onSelectedItemsUpdated(selectedItems) {
    this.setState({
      selectedItems: selectedItems,
      count: selectedItems.length,
    });
  }

  getTotal() {
    let selectedItems = this.state.selectedItems;
    axios
      .post("/items/total", selectedItems)
      .then((res) => {
        this.setState({
          groupedSelectedItems: res.data.GroupedItems,
          totalPrice: res.data.GrandTotal,
        });
      });
  }

  groupShoppingCartItems() {
    let selectedItems = this.state.selectedItems;
    let groupedSelectedItems = [];
    let tempGrouping = {};

    // group items by id.
    selectedItems.forEach((item) => {
      let id = item.id;
      let price = item.price;

      if (!tempGrouping.hasOwnProperty(id)) {
        tempGrouping[id] = item;
        tempGrouping[id].totalItemCount = 0;
        tempGrouping[id].totalPrice = 0.0;
      }

      tempGrouping[id].totalItemCount += 1;
      tempGrouping[id].totalPrice += price;
    });

    // put them in an array instead of a dictionary.
    // here, each item represent all of its kind with total price and total count.
    Object.keys(tempGrouping).forEach((id) => {
      groupedSelectedItems.push(tempGrouping[id]);
    });

    return groupedSelectedItems;
  }

  removeItem(item) {
    this.props.removeItem(item);
  }

  addItem(item) {
    this.props.addItem(item);
  }

  makePayment(paymentInput) {
    this.props.makePayment(paymentInput);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="block align-items-center">
            {this.state.groupedSelectedItems.map((groupedItem, index) => {
              return (
                <CartItem
                  cartItem={groupedItem}
                  removeItem={this.removeItem}
                  addItem={this.addItem}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-4">
          <Summary totalPrice={this.state.totalPrice} makePayment={this.makePayment} />
        </div>
      </div>
    );
  }
}

export default ShoppingCartPage;
