import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class WishItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item };

    this.onBuyBtnClick = this.onBuyBtnClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onRemoveFromWishlistClick = this.onRemoveFromWishlistClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.item });
  }

  // tell parent to add this item to the cart.
  onBuyBtnClick() {
    this.props.addItemToCart(this.state.item);
  }

  onItemClick() {
    this.props.viewItem(this.state.item);
  }

  onRemoveFromWishlistClick() {
    this.props.removeFromWishlist(this.state.item);
  }

  render() {
    return (
      <div
        className="card text-center card border-dark mb-3"
        style={{
          width: "18rem",
          maxHeight: "30rem",
          margin: "1rem",
          padding: ".5rem",
        }}
      >
        <div
          className="align-items-center justify-content-center"
          onClick={this.onItemClick}
        >
          <img
            src={this.state.item.image}
            className="card-img-top"
            alt={this.state.item.title}
            style={{
              maxHeight: "10rem",
              maxWidth: "10rem",
              minHeight: "10rem",
              minWidth: "10rem",
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.state.item.title}</h5>
          <small className="card-text">{this.state.item.body}</small>
          <hr />
          <span>
            <strong>{this.state.item.price} LKR</strong>
            <small className="text-primary" style={{ marginLeft: "1rem" }}>
              {this.state.item.discount}% off
            </small>
          </span>
          <hr />
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              onClick={this.onRemoveFromWishlistClick}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              onClick={this.onBuyBtnClick}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WishItemCard;
