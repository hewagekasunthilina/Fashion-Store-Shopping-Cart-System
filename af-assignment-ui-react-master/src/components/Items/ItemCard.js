import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item };

    this.onBuyBtnClick = this.onBuyBtnClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onAddToWishListClick = this.onAddToWishListClick.bind(this);
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

  onAddToWishListClick() {
    this.props.addToWishList(this.state.item);
  }

  render() {
    return (
      <div
        className="card text-center"
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
          <div className="row align-items-center justify-content-center">
            <span class="badge badge-pill badge-disabled">
              <small>{this.state.item.category}</small>
            </span>
            <span style={{ marginRight: ".5rem" }}>
              <FontAwesomeIcon icon={faStar} color="orange"/>
              <small>
                ({this.state.item.averageRating ? this.state.item.averageRating : 0})
              </small>
            </span>
          </div>
          <br />
          <small className="card-text">{this.state.item.body}</small>
          <hr />
          <span>
            <strong>{this.state.item.price} LKR</strong>
            <small className="text-primary" style={{ marginLeft: "1rem" }}>
              {this.state.item.discount}% off
            </small>
          </span>
          <hr />
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={this.onAddToWishListClick}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
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

export default ItemCard;
