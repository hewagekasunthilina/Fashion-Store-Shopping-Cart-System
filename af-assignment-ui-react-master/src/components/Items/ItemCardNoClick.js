import React from "react";

class ItemCardNoClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item };

    this.onBuyBtnClick = this.onBuyBtnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.item });
  }

  // tell parent to add this item to the cart.
  onBuyBtnClick() {
    this.props.addItemToCart(this.state.item);
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
        <div className="align-items-center justify-content-center">
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
          <button
            href="#"
            className="btn btn-outline-primary btn-sm btn-block"
            onClick={this.onBuyBtnClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default ItemCardNoClick;
