import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = { review: this.props.review };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ review: this.props.review });
  }

  render() {
    return (
      <button
        href="#"
        class="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div class="w-100 justify-content-between">
          <small className="text-muted">{this.state.review.time}</small> <br />
	  <span className="mb-1">{this.state.review.message}</span>
        </div>
      </button>
    );
  }
}

export default Review;
