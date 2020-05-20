import React from "react";
import axios from "../../api/api";
import EditItem from "../Items/EditItem";

class EditItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], categories: [] };

    this.updateItem = this.updateItem.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() { this.fetchItems(); this.fetchCategories(); }

  // parent state is managed here; add item to selected items list.
  updateItem(item) {
    axios.put('/items', { item })
    .then(res => { 
      if (res.data.successful) {
        alert(`${item.title} updated successfully`);
        this.fetchItems();
      }
      else alert(`Unable to update ${item.title} because ${res.data.body}`);
    })
    .catch(error => { alert(`Unable to update ${item.title} because ${error}`) });
  }

  deleteItem(item) {
    axios.delete(`/items/${item._id}`)
    .then(res => { 
      if (res.data.successful) {
        alert(`${item.title} deleted successfully`);
        this.fetchItems();
      }
      else alert(`Unable to delete ${item.title} because ${res.data.body}`);
    })
    .catch(error => { alert(`Unable to delete ${item.title} because ${error}`) });
  }

  fetchItems() {
    axios.get('/items')
    .then(res => { this.setState({ items: res.data.body }); })
  }

  fetchCategories() {
    axios.get('/categories')
    .then(res => {
      if (res.data.successful) {
        this.setState({ categories: res.data.body });
        console.log('fired', res.data.body);
      }
      else alert(`Unable to load categories because ${res.data.body}`);
    })
    .catch(error => alert(`Unable to load categories because ${error}`));
  }

  render() {
    return (
      <div className="row align-items-center">
        {this.state.items.map((item, index) => {
          return <EditItem item={item} categories={this.state.categories} updateItem={this.updateItem} deleteItem={this.deleteItem} />;
        })}
      </div>
    );
  }
}

export default EditItemsPage;
