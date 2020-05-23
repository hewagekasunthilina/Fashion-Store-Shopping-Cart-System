import React from "react";

class EditItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item._id,
            title: this.props.item.title,
            body: this.props.item.body,
            price: this.props.item.price,
            discount: this.props.item.discount,
            category: this.props.item.category,
            deleteConfirmation: false,
            categories: this.props.categories,
            cardClass: "card col-md-12"
        };

        this.onUpdateBtnClick = this.onUpdateBtnClick.bind(this);
        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.validateForm = this.validateForm.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.item._id,
            title: nextProps.item.title,
            body: nextProps.item.body,
            price: nextProps.item.price,
            discount: nextProps.item.discount,
            category: nextProps.item.category,
            categories: nextProps.categories
        });
    }

    // tell parent to add this item to the cart.
    onUpdateBtnClick() {
        console.log(this.state.categories);
        let updatedItem = {
            _id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            price: this.state.price,
            discount: this.state.discount,
            category: this.state.category
        };

        let validForm = this.validateForm();
        if (validForm) this.props.updateItem(updatedItem);
    }

    onDeleteBtnClick() {
        let itemToDelete = {
            _id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            price: this.state.price,
            discount: this.state.discount,
            category: this.state.category
        };

        if (this.state.deleteConfirmation) this.props.deleteItem(itemToDelete);
        else alert(`Check Deletion Confirmation checkbox for ${itemToDelete.title}`);
    }

    onFieldChange(e) {
        let updatedField = e.target.id;
        let newValue = e.target;

        switch (updatedField) {
            case "name":
                this.setState({title: newValue.value});
                break;
            case "price":
                this.setState({price: newValue.value});
                break;
            case "description":
                this.setState({body: newValue.value});
                break;
            case "discount":
                this.setState({discount: newValue.value});
                break;
            case "price":
                this.setState({price: newValue.value});
                break;
            case "delete":
                this.setState({deleteConfirmation: newValue.checked});
                break;
            case "category":
                this.setState({category: newValue.value});
                break;
        }
    }

    validateForm() {
        let itemToBeSubmitted = {
            _id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            price: this.state.price,
            discount: this.state.discount,
            category: this.state.category
        };
        let hasEmptyField = false;
        Object.keys(itemToBeSubmitted).forEach(key => {
            if (itemToBeSubmitted[key] === "") hasEmptyField = true
        });

        this.setState({cardClass: hasEmptyField ? "card col-md-12 border-danger" : "card col-md-12"});
        return !hasEmptyField;
    }

    render() {
        return (
            <div
                className="align-items-center justify-content-center row col-md-12"
                style={{margin: ".5rem", padding: ".5rem"}}
            >
                <div className="card text-white bg-dark mb-3">
                    <div className={this.state.cardClass}>
                        <div className="card-body">
                            <div class="form-inline">
                                <div class="form-group" style={{"margin-right": ".1rem"}}>
                                    <label style={{"margin-right": ".1rem"}}>Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="MacBook Pro 13"
                                        value={this.state.title}
                                        onChange={this.onFieldChange}
                                    />
                                </div>
                                <div class="form-group" style={{"margin-right": "1rem"}}>
                                    <label style={{"margin-right": ".5rem"}}>Description</label>
                                    <input
                                        id="description"
                                        type="text"
                                        className="form-control"
                                        placeholder="150000.0"
                                        value={this.state.body}
                                        onChange={this.onFieldChange}
                                    />
                                </div>
                                <div class="form-group" style={{"margin-right": "1rem"}}>
                                    <label style={{"margin-right": ".5rem"}}>Category</label>
                                    <select
                                        id="category"
                                        value={this.state.category}
                                        onChange={this.onFieldChange}
                                        ref={this.category}
                                        className="form-control">
                                        {this.state.categories.map((category, index) => {
                                            return (<option>{category.name}</option>)
                                        })}
                                    </select>
                                </div>
                                <div class="form-group" style={{"margin-right": "1rem"}}>
                                    <label style={{"margin-right": ".5rem"}}>Discount</label>
                                    <input
                                        id="discount"
                                        type="text"
                                        className="form-control"
                                        placeholder="0"
                                        value={this.state.discount}
                                        onChange={this.onFieldChange}
                                    />
                                </div>

                            </div>

                            <br/>
                            <div class="form-inline">
                                <div class="form-group" style={{"margin-right": "1rem"}}>
                                    <label style={{"margin-right": ".5rem"}}>Price</label>
                                    <input
                                        id="price"
                                        type="text"
                                        className="form-control"
                                        placeholder="150000.0"
                                        value={this.state.price}
                                        onChange={this.onFieldChange}
                                    />
                                </div>
                                <br/>
                                <div className="form-group" style={{"margin-right": "1rem"}}>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={this.onUpdateBtnClick}
                                        style={{marginLeft: "4.5rem"}}
                                    >
                                        Update Item
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={this.onDeleteBtnClick}
                                        style={{marginLeft: "1rem"}}
                                    >
                                        Delete Item
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="card-body align-items-right justify-content-right">
                            <div class="form-check" style={{float: "right"}}>
                                <input class="form-check-input" type="checkbox" value="" id="delete"
                                       onChange={this.onFieldChange}/>
                                <small class="form-check-label" for="defaultCheck1">
                                    <h7 style={{color: "#000000"}}>Confirm Deletion</h7>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditItem;
