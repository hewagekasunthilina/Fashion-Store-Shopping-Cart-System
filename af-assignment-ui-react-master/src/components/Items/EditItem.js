import React from "react";

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };

    this.onUpdateBtnClick = this.onUpdateBtnClick.bind(this);

    // Form references.
    this.discount = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.item });
  }

  // tell parent to add this item to the cart.
  onUpdateBtnClick() {
    let updatedItem = this.state.item;
    updatedItem.discount = this.discount.current.value;

    this.props.updateItem(updatedItem);
  }

  render() {
    return (
      <div
        className="align-items-center justify-content-center row col-md-12"
        style={{ margin: ".5rem", padding: ".5rem" }}
      >
        <div className="card">
          <div className="card-body">
            <form class="form-inline">
              <div class="form-group" style={{ "margin-right": "1rem" }}>
                <label style={{ "margin-right": ".5rem" }}>Name</label>
                <input
                  ref={this.name}
                  type="text"
                  className="form-control"
                  placeholder="MacBook Pro 13"
                  value={this.state.item.title}
                  disabled
                />
              </div>
              <div class="form-group" style={{ "margin-right": "1rem" }}>
                <label style={{ "margin-right": ".5rem" }}>Price</label>
                <input
                  ref={this.price}
                  type="text"
                  className="form-control"
                  placeholder="150000.0"
                  value={this.state.item.price}
                  disabled
                />
              </div>
              <div class="form-group" style={{ "margin-right": "1rem" }}>
                <label style={{ "margin-right": ".5rem" }}>Discount</label>
                <input
                  ref={this.discount}
                  type="text"
                  className="form-control"
                  placeholder="0"
                />
                <br />
                <small>Current Discount:<strong>{this.state.item.discount}</strong></small>
              </div>
              <div class="form-group" style={{ "margin-right": "1rem" }}>
                <button
                  href="#"
                  className="btn btn-outline-primary btn-sm"
                  onClick={this.onUpdateBtnClick}
                >
                  Update Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditItem;
