import React from "react";
import axios from "../../api/api";
import WishItemCard from "../Items/WishItemCard";

class WishlistPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], user: this.props.user};

        this.addItemToCart = this.addItemToCart.bind(this);
        this.fetchWishlistItems = this.fetchWishlistItems.bind(this);
        this.removeFromWishlist = this.removeFromWishlist.bind(this);
        this.viewItem = this.viewItem.bind(this);
    }

    componentDidMount() {
        this.fetchWishlistItems();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({user: nextProps.user});
    }

    // parent state is managed here; add item to selected items list.
    addItemToCart(item) {
        this.props.addItemToCart(item);
    }

    viewItem(item) {
        this.props.viewItem(item);
    }

    fetchWishlistItems() {
        let email = this.state.user.email;
        axios.get(`/users/${email}/wishlist`).then((res) => {
            this.setState({items: res.data.wishlist});
        });
    }

    removeFromWishlist(item) {
        let email = this.state.user.email;
        let id = item._id;

        axios
            .delete(`/users/${email}/wishlist/items/${id}`)
            .then((res) => {
                if (res.data.successful) {
                    this.fetchWishlistItems();
                    alert(`${item.title} removed from wishlist!`);
                }
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="row align-items-center">
                {this.state.items.map((item, index) => {
                    return (
                        <WishItemCard
                            item={item}
                            addItemToCart={this.addItemToCart}
                            viewItem={this.viewItem}
                            removeFromWishlist={this.removeFromWishlist}
                        />
                    );
                })}
            </div>
        );
    }
}

export default WishlistPage;
