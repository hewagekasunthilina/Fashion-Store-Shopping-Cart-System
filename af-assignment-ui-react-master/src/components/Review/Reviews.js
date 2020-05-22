import React from "react";
import Review from "./Review";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item, reviews: this.props.reviews };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ reviews: nextProps.reviews });
  }

  render() {
    return (
      <div class="list-group">
        <label for="exampleFormControlTextarea1">Reviews</label>
        { this.state.reviews.map((review, index) => { return(<Review review={review} />) }) }
      </div>
    );
  }
}

export default Reviews;
