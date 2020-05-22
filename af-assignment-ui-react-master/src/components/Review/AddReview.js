import React from "react";

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item };

    this.review = React.createRef();
    this.onAddReviewBtnClick = this.onAddReviewBtnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.item });
  }

  // tell parent to add this item to the cart.
  onAddReviewBtnClick() {
    this.props.addReview(this.review.current.value);
  }

  render() {
    return (
      <div>
        <div>
          <div className="form-group row">
            <label for="exampleFormControlTextarea1">Add a Review</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              ref={this.review}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <button
            href="#"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={this.onAddReviewBtnClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddReview;
