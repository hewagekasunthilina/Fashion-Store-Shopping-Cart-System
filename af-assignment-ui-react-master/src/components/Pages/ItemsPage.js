import React from "react";
import axios from "../../api/api";
import ItemCard from "../Items/ItemCard";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import "../styles/Footer.css";

class ItemsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedItems: [], selectedItemCount: 0, items: [], categories: []};

        this.addItemToCart = this.addItemToCart.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
        this.viewItem = this.viewItem.bind(this);
        this.addToWishList = this.addToWishList.bind(this);
        this.fetchCategories = this.fetchCategories.bind(this);
        this.fetchItemsByCategory = this.fetchItemsByCategory.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        // this.addItemToCart = this.addItemToCart.bind(this);
        // this.fetchItems = this.fetchItems.bind(this);
        // this.viewItem = this.viewItem.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
        this.fetchCategories();
    }

    // parent state is managed here; add item to selected items list.
    addItemToCart(item) {
        this.props.addItemToCart(item);
    }

    addToWishList(item) {
        this.props.addToWishList(item);
    }

    viewItem(item) {
        this.props.viewItem(item);
    }

    fetchItems() {
        axios.get("/items").then((res) => {
            // Repalce item's image with current origin so that it is fetched from the backend properly.
            let items = [];
            res.data.body.forEach(item => {
                item.image = `${axios.defaults.baseURL}/${item.image}`;
                items.push(item);
            });
            this.setState({items: items});
        });
    }

    fetchItemsByCategory(category) {
        if (category === "All") {
            this.fetchItems();
        } else {
            axios.get(`/items/by/${category}`).then((res) => {
                // Repalce item's image with current origin so that it is fetched from the backend properly.
                let items = [];
                res.data.body.forEach(item => {
                    item.image = `${axios.defaults.baseURL}/${item.image}`;
                    items.push(item);
                });
                this.setState({items: items});
            });
        }
    }

    fetchCategories() {
        axios.get("/categories")
            .then((res) => {
                if (res.data.successful) {
                    let categories = res.data.body;
                    categories.unshift({name: "All", description: ""});
                    this.setState({categories: categories});
                }
            });
    }

    onCategoryChange(e) {
        let selectedCategory = e.target.value;
        this.fetchItemsByCategory(selectedCategory);
    }

    render() {
        return (
            <div>

                <Carousel></Carousel>
                <div className="col-md-3" style={{display: "contents"}}><span
                    style={{marginLeft: "45.5%", fontWeight: "600"}}>
                        SHOP BY CATEGORY</span>
                    <select ref={this.category} onChange={this.onCategoryChange}
                            className="form-control">{this.state.categories.map((category, index) => {
                        return (<option>{category.name}</option>)
                    })} </select>
                </div>
                <hr/>


                <div className="container" style={{maxWidth: "1500px", marginLeft: "-8px"}}>
                    <div className="row align-items-center" style={{marginRight: "-30px"}}>
                        {this.state.items.map((item, index) => {
                            return (
                                <ItemCard
                                    item={item}
                                    addItemToCart={this.addItemToCart}
                                    addToWishList={this.addToWishList}
                                    viewItem={this.viewItem}
                                />
                            );
                        })}
                    </div>
                </div>

                <Footer></Footer>
            </div>
        );
    }
}


export default ItemsPage;
