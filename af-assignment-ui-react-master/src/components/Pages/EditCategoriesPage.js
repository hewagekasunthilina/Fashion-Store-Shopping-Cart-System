import React from "react";
import axios from "../../api/api";
import EditCategory from "../Items/EditCategory";

class EditCategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: []};

        this.updateCategory = this.updateCategory.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
    }

    // parent state is managed here; add item to selected items list.
    updateCategory(category) {
        axios.put('/categories', {category})
            .then(res => {
                if (res.data.successful) {
                    alert(`${category.name} updated successfully`);
                    this.fetchItems();
                } else alert(`Unable to update ${category.name} because ${res.data.body}`);
            })
            .catch(error => {
                alert(`Unable to update ${category.name} because ${error}`)
            });
    }

    deleteCategory(category) {
        axios.delete(`/categories/${category.name}`)
            .then(res => {
                if (res.data.successful) {
                    alert(`${category.name} deleted successfully`);
                    this.fetchItems();
                } else alert(`Unable to delete ${category.name} because ${res.data.body}`);
            })
            .catch(error => {
                alert(`Unable to delete ${category.name} because ${error}`)
            });
    }

    fetchItems() {
        axios.get('/categories')
            .then(res => {
                console.log(res.data.body);
                this.setState({categories: res.data.body});
            })
    }

    render() {
        return (
            <div className="row align-items-center">
                {this.state.categories.map((category, index) => {
                    return <EditCategory category={category} updateCategory={this.updateCategory}
                                         deleteCategory={this.deleteCategory}/>;
                })}
            </div>
        );
    }
}

export default EditCategoriesPage;
