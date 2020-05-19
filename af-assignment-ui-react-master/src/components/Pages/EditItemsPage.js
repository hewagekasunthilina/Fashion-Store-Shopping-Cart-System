import React from "react";
import axios from "../../api/api";
import EditItem from "../Items/EditItem";

class EditItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };

    this.updateItem = this.updateItem.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
  }

  componentDidMount() { this.fetchItems(); }

  // parent state is managed here; add item to selected items list.
  updateItem(item) {
    axios.put('/items', { item })
    .then(res => { console.log(res); })
    //.then(() => this.fetchItems());
  }

  fetchItems() {
    axios.get('/items')
    .then(res => { this.setState({ items: res.data.body }); })
  }

  render() {
    return (
      <div className="row align-items-center">
        {this.state.items.map((item, index) => {
          return <EditItem item={item} updateItem={this.updateItem} />;
        })}
      </div>
    );
  }
}

export default EditItemsPage;
