import React from "react";
import axios from "../../api/api";
import ItemCard from "../Items/ItemCard";

class ItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItems: [], selectedItemCount: 0, items: [] };

    this.addItemToCart = this.addItemToCart.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
    this.viewItem = this.viewItem.bind(this);
    this.addToWishList = this.addToWishList.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  // parent state is managed here; add item to selected items list.
  addItemToCart(item) {
    this.props.addItemToCart(item);
  }

  addToWishList(item) {
    this.props.addToWishList(item);
  }

  viewItem(item) {
    this.props.viewItem(item);
  }

  fetchItems() {
    axios.get("/items").then((res) => {
	  // Repalce item's image with current origin so that it is fetched from the backend properly.
	  let items = [];
	  res.data.body.forEach(item => { item.image = `${axios.defaults.baseURL}/${item.image}`; items.push(item); });
      this.setState({ items: items });
    });
  }

  render() {
    return (
      <div className="row align-items-center">
        {this.state.items.map((item, index) => {
          return (
            <ItemCard
              item={item}
              addItemToCart={this.addItemToCart}
              addToWishList={this.addToWishList}
              viewItem={this.viewItem}
            />
          );
        })}
      </div>
    );
  }
}

export default ItemsPage;
