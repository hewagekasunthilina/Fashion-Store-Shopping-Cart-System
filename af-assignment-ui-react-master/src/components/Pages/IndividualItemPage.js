import React from "react";
import axios from "../../api/api";
import AddReview from '../Review/AddReview';
import ItemCardNoClick from '../Items/ItemCardNoClick';
import Reviews from '../Review/Reviews';

class IndividualItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item, reviews: [] };

    this.onBuyBtnClick = this.onBuyBtnClick.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  componentDidMount() {
      this.getReviews();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.item });
  }

  // tell parent to add this item to the cart.
  onBuyBtnClick() {
    this.props.addItemToCart(this.state.item);
  }

  getReviews() {
    let id = this.state.item._id;
    axios.get(`/items/${id}/reviews`)
    .then(response => this.setState({ reviews: response.data.reviews }))
    .catch(error => console.log(error));

    console.log(this.state.reviews);
  }

  addReview(message) {
    let id = this.state.item._id;
    axios.post(`/items/${id}/review`, { review: message })
    .then(res => { this.getReviews(); })
    .catch(error => {});
  }

  addItemToCart(item) {
      this.props.addItemToCart(item);
  }

  render() {
    return (
      <div className="row col-md-12">
          <div className="col-md-4">
            <ItemCardNoClick item={this.state.item} addItemToCart={this.addItemToCart} />
          </div>
          <div className="col-md-8">
            <div>
                <AddReview item={this.state.item} addReview={this.addReview} />
            </div>
            <hr />
            <div>
                <Reviews item={this.state.item} reviews={this.state.reviews} />
            </div>
          </div>
      </div>
    );
  }
}

export default IndividualItemPage;
