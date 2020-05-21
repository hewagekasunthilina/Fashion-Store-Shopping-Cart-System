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
<<<<<<< HEAD
=======
<div>
  <Carousel>

  </Carousel>
>>>>>>> 3ed38d9feed5b173634321cb09f71f8bd7100277
                <div>
                    <br/>
                    <Carousel></Carousel>
                    <br/>
                    <br/>
                    <div className="col-md-3">
                        Categories
                        <select ref={this.category} onChange={this.onCategoryChange}
                                className="form-control">{this.state.categories.map((category, index) => {
                            return (<option>{category.name}</option>)
                        })} </select>
                    </div>
                    <hr/>

<<<<<<< HEAD
                  <div className="container">
=======
>>>>>>> 3ed38d9feed5b173634321cb09f71f8bd7100277
                    <div className="row align-items-center">
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
<<<<<<< HEAD
            </div>
        );
    }
}
=======
    <Footer>

    </Footer>
                </div>

                );
                }
                }
>>>>>>> 3ed38d9feed5b173634321cb09f71f8bd7100277

export default ItemsPage;
