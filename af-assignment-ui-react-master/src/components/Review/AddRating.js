import React from "react";
import StarRatings from "react-star-ratings";

class AddRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item, rating: 0 };

    this.onAddSubmitBtnClick = this.onAddSubmitBtnClick.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.item });
  }

  // tell parent to add this item to the cart.
  onAddSubmitBtnClick() {
    this.props.addRating(this.state.rating);
  }

  onRatingChange(newRating, name) {
    console.log(newRating);
    this.setState({ rating: newRating });
    this.props.addRating(newRating);
  }

  render() {
    return (
      <div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Rate the Item</label>
            <br />
            <div><StarRatings
              rating={this.state.rating}
              starRatedColor="Red"
              changeRating={this.onRatingChange}
              numberOfStars={5}
              name='rating'
              starDimension="20px"
              starSpacing="5px"
            />
            </div>
        </div>
        <div className="row">
          <button
            href="#"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={this.onAddSubmitBtnClick}
          >
            Submit Rating
          </button>
        </div>
      </div>
    );
  }
}

export default AddRating;
