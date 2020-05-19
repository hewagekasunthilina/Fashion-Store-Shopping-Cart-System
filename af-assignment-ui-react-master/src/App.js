import React from "react";
import axios from "./api/api";
import ItemsPage from "./components/Pages/ItemsPage";
import NavAdmin from "./components/nav/NavAdmin";
import NavCustomer from "./components/nav/NavCustomer";
import NavStoreManager from "./components/nav/NavStoreManager";
import NavNotLogged from "./components/nav/NavNotLogged";
import "./App.css";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage";
import AddItemPage from "./components/Pages/AddItemPage";
import EditItemsPage from "./components/Pages/EditItemsPage";
import AddManagerUser from "./components/User/AddManagerUser";
import LoginRegisterCustomer from "./components/User/LoginRegisterCustomer";
import IndividualItemPage from "./components/Pages/IndividualItemPage";
import WishlistPage from "./components/Pages/WishlistPage";
import AddCategoryPage from "./components/Pages/AddCategoryPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
            selectedItemCount: 0,
            selectedItem: {},
            whereTo: "LoginRegister",
            user: {},
            role: "",
            totalPrice: 0.0,
            paymentInProcess: false,
        };

        // Events.
        this.onBuyBtnClick = this.onBuyBtnClick.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
        this.makePayment = this.makePayment.bind(this);
        this.logOutUser = this.logOutUser.bind(this);
        this.addToWishList = this.addToWishList.bind(this);
		this.handleSession = this.handleSession.bind(this);

        // Navigation.
        this.goToShoppingCart = this.goToShoppingCart.bind(this);
        this.goToItems = this.goToItems.bind(this);
        this.goToAddItem = this.goToAddItem.bind(this);
        this.goToEditItems = this.goToEditItems.bind(this);
        this.goToAddManagerUser = this.goToAddManagerUser.bind(this);
        this.goToLoginRegister = this.goToLoginRegister.bind(this);
        this.goToPage = this.goToPage.bind(this);
        this.viewItem = this.viewItem.bind(this);
		
		// Session.
		this.handleSession();
    }

	componentDidMount() {
		this.handleSession();
	}
	
    componentWillReceiveProps(nextProps) {
        this.setState({ item: nextProps.item });
    }
	
	handleSession() {
		if (localStorage.getItem("user") != null) {
			let user = localStorage.getItem("user");
			user = JSON.parse(user);
			this.setState({ user: user, role: user.role }, () => { this.goToItems() });
		}
	}

    // tell parent to add this item to the cart.
    onBuyBtnClick() {
        this.props.addItemToCart(this.state.item);
    }
	
    removeItemFromCart(item) {
        let indexToRemove = -1;
        let idToRemove = item.id;
        let selectedItems = this.state.selectedItems;

        // See if the item is in the selected items list and remove one occurence.
        selectedItems.map((selectedItem, index) => {
            let result = -1;
            if (selectedItem.id === idToRemove) { indexToRemove = index; result = index; }
            return result;
        });
        if (indexToRemove > -1) {
            selectedItems.splice(indexToRemove, 1);
        }

        this.setState({ selectedItems: selectedItems, selectedItemCount: selectedItems.length },
            this.calculateTotalPrice
        );
    }

    addItemToCart(item) {
		// Comparing objects don't work well in JS, so stringy and compare to,
		// see if the two objects are empty.
        if (JSON.stringify(this.state.user) === JSON.stringify({})) {
			alert("Please login or create an account to start shopping!");
			this.setState({ whereTo: "LoginRegister"})
		} else {
			let selectedItems = this.state.selectedItems;
			selectedItems.push(item);
			this.setState({ selectedItems: selectedItems, selectedItemCount: selectedItems.length }, this.calculateTotalPrice);
		}
    }

    calculateTotalPrice() {
        let selectedItems = this.state.selectedItems;
        let totalPrice = 0.0;

        selectedItems.forEach((item) => {
            totalPrice += item.price;
        });

        this.setState({ totalPrice: totalPrice });
    }

    makePayment(paymentInput) {
        let payment = paymentInput;
        let user = this.state.user;
        payment.email = user.email;

        axios.post("/payments", { payment })
            .then(res => {
                if (res.data.successful) {
                    this.setState({ selectedItems: [], selectedItemCount: 0, whereTo: "ItemsPage" });
                    alert(`Paid ${payment.totalPrice} via ${payment.selectedCard} successfully`);
                } else alert(`Payment via ${payment.selectedCard} failed`);
            })
            .catch(error => alert(`Payment via ${payment.selectedCard} failed due to ${error}`));

    }

    onSuccessfulLogin(user) {
        this.setState({ user: user, role: user.role }, this.goToItems());
		localStorage.setItem("user", JSON.stringify(user));
    }

    logOutUser() {
        this.setState({ user: {}, role: "", whereTo: "LoginRegister" })
		localStorage.removeItem("user");
    }

    addToWishList(item) {
		console.log('Imhere');
		console.log(JSON.stringify(this.state.user) === JSON.stringify({}));
		if (JSON.stringify(this.state.user) === JSON.stringify({})) {
			alert("Please login or create an account to start shopping!");
			this.setState({ whereTo: "LoginRegister"})
		} else {
			let email = this.state.user.email;
        	axios.post(`/users/${email}/wishlist`, { item })
            .then(res => console.log(res.data))
            .catch(error => console.log(error));
		}
    }

    /*
     * Navigation
     */
    viewItem(item) {
        // setState is not synchronous. Therefore, if whereTo is set before selectedItem is fully set,
        // the Item component will receive a null object.
        this.setState({ selectedItem: item }, () => { this.setState({ whereTo: "Item" }) });
    }
    goToPage(page) {
        this.setState({ whereTo: page });
    }
    goToShoppingCart() {
        this.setState({ whereTo: "ShoppingCartPage" });
    }
    goToItems() {
        this.setState({ whereTo: "ItemsPage" });
    }
    goToAddItem() {
        this.setState({ whereTo: "AddItemPage" });
    }
    goToEditItems() {
        this.setState({ whereTo: "EditItemsPage" });
    }
    goToAddManagerUser() {
        this.setState({ whereTo: "AddManagerUser" });
    }
    goToLoginRegister() {
        this.setState({ whereTo: "LoginRegister" });
    }

    render() {
        // Decide which body to render.
        let body;
        switch (this.state.whereTo) {
            case "ItemsPage":
                body = < ItemsPage addItemToCart = { this.addItemToCart }
                viewItem = { this.viewItem }
                addToWishList = { this.addToWishList }
                />; break;
            case "WishlistPage":
                body = < WishlistPage user = { this.state.user }
                addItemToCart = { this.addItemToCart }
                viewItem = { this.viewItem }
                />; break;
            case "Item":
                body = < IndividualItemPage item = { this.state.selectedItem }
                addItemToCart = { this.addItemToCart }
                />; break;
            case "ShoppingCartPage":
                body = < ShoppingCartPage selectedItems = { this.state.selectedItems }
                totalPrice = { this.state.totalPrice }
                paymentInProcess = { this.state.paymentInProcess }
                removeItem = { this.removeItemFromCart }
                addItem = { this.addItemToCart }
                makePayment = { this.makePayment }
                />; break;
            case "AddItemPage":
                body = < AddItemPage / > ;
                break;
            case "EditItemsPage":
                body = < EditItemsPage / > ;
                break;
            case "AddManagerUser":
                body = < AddManagerUser / > ;
                break;
            case "AddCategoryPage":
                body = < AddCategoryPage / > ;
                break;
            default:
                body = < LoginRegisterCustomer onSuccessfulLogin = { this.onSuccessfulLogin }
                />; break;
        }

        // Decide which navbar to render based on user role.
        let nav;
        switch (this.state.user.role) {
            case "customer":
                nav = < NavCustomer user = { this.state.user }
                goToPage = { this.goToPage }
                selectedItemCount = { this.state.selectedItemCount }
                logout = { this.logOutUser }
                />; break;
            case "admin":
                nav = < NavAdmin goToPage = { this.goToPage }
                logout = { this.logOutUser }
                />; break;
            case "manager":
                nav = < NavStoreManager goToPage = { this.goToPage }
                logout = { this.logOutUser }
                />; break;
            default:
                nav = < NavNotLogged goToPage = { this.goToPage }
                />; break;
        }

        return ( <
            div >
            <
            div > { nav } < /div> <
            div className = "container-fluid" > { body } < /div> < /
            div >
        );
    }
}

export default App;
