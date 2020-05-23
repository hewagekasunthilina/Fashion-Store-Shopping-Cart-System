import React from "react";
import axios from "../../api/api";
import AddReview from '../Review/AddReview';
import ItemCardNoClick from '../Items/ItemCardNoClick';
import Reviews from '../Review/Reviews';
import AddRating from "../Review/AddRating";

class IndividualItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: this.props.item, reviews: [], user: this.props.user, rating: 0};

        this.onBuyBtnClick = this.onBuyBtnClick.bind(this);
        this.getReviews = this.getReviews.bind(this);
        this.addReview = this.addReview.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.addRating = this.addRating.bind(this);
        this.getRatings = this.getRatings.bind(this);
    }

    componentDidMount() {
        this.getReviews();
        this.getRatings();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({item: nextProps.item, user: nextProps.user});
    }

    // tell parent to add this item to the cart.
    onBuyBtnClick() {
        this.props.addItemToCart(this.state.item);
    }

    getReviews() {
        let id = this.state.item._id;
        axios.get(`/items/${id}/reviews`)
            .then(response => this.setState({reviews: response.data.reviews}))
            .catch(error => console.log(error));

        console.log(this.state.reviews);
    }

    addReview(message) {
        let id = this.state.item._id;
        axios.post(`/items/${id}/review`, {review: message})
            .then(res => {
                this.getReviews();
            })
            .catch(error => {
            });
    }

    addRating(newRating) {
        let rating = {email: this.state.user.email, value: newRating};
        let id = this.state.item._id;

        axios.post(`/items/${id}/ratings`, {rating})
            .then(res => {
                this.getRatings();
            })
            .catch(error => {
            });
    }

    getRatings() {
        let id = this.state.item._id;

        axios.get(`/items/${id}/ratings`)
            .then(res => {
                if (res.data.successful) {
                    let item = this.state.item;
                    item["averageRating"] = res.data.rating;
                    this.setState({rating: res.data.rating, item: item});
                }
            })
            .catch(error => console.log(error));
    }

    addItemToCart(item) {
        this.props.addItemToCart(item);
    }

    addRating(newRating) {
        let rating = {
            email: this.state.user.email,
            value: newRating
        };
        let itemId = this.state.item._id;

        axios.post(`/items/${itemId}/ratings`, {rating})
            .then(res => {
                if (res.data.successful) {
                    this.getRatings();
                    alert(`You rated ${this.state.item.title} with ${newRating} stars!`);
                } else alert(`Unable to rate ${this.state.item.title} because ${res.data.body}`);
            })
            .catch(error => {
                alert(`Unable to rate ${this.state.item.title} because ${error}`);
            })

    }

    render() {
        return (
            <div className="row col-md-12">
                <div className="col-md-4">
                    <ItemCardNoClick item={this.state.item} addItemToCart={this.addItemToCart}/>
                </div>
                <div className="col-md-8">
                    <div>
                        <AddRating item={this.state.item} addRating={this.addRating}/>
                    </div>
                    <hr/>
                    <div>
                        <AddReview item={this.state.item} addReview={this.addReview}/>
                    </div>
                    <hr/>
                    <div>
                        <Reviews item={this.state.item} reviews={this.state.reviews}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualItemPage;
